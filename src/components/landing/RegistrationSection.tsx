import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone must be 10 digits")
    .refine(
      (s) => /^9\d{9}$/.test(s.replace(/\D/g, "")),
      "Phone must start with 9 and be 10 digits (e.g. 9812345678)"
    ),
  college: z
    .string()
    .trim()
    .min(1, "College/Institution is required")
    .max(200, "College must be less than 200 characters"),
  registrationType: z.enum(["attend", "ambassador"]),
});
type RegistrationFormData = z.infer<typeof registrationSchema>;
const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    registrationType: "attend",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegistrationFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (
    field: keyof RegistrationFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = registrationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegistrationFormData, string>> =
        {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof RegistrationFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone.replace(/\D/g, ""),
      college: formData.college,
      registration_type: formData.registrationType,
    };

    if (supabase) {
      // Check if email or phone already registered (phone stored as digits only)
      const { data: existing } = await supabase
        .from("registrations")
        .select("id")
        .or(`email.eq.${formData.email},phone.eq.${payload.phone}`)
        .limit(1);

      if (existing && existing.length > 0) {
        toast({
          title: "Already registered",
          description:
            "This email or phone number is already registered for the event.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from("registrations").insert(payload);
      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Send confirmation email via API
      const apiUrl = import.meta.env.VITE_API_URL;
      if (apiUrl) {
        const emailRes = await fetch(
          `${apiUrl}/api/v1/common/chitwan-event/send-email`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.email,
              name: formData.fullName,
            }),
          }
        );
        if (!emailRes.ok) {
          console.warn(
            "Confirmation email could not be sent:",
            emailRes.status
          );
          toast({
            title: "Registration saved",
            description:
              "We couldn't send the confirmation email. You're still registered.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Registration Successful! 🎉",
            description: `Thank you ${formData.fullName}! We'll send confirmation to ${formData.email}`,
          });
        }
      } else {
        toast({
          title: "Registration Successful! 🎉",
          description: `Thank you ${formData.fullName}! We'll send confirmation to ${formData.email}`,
        });
      }
    } else {
      toast({
        title: "Registration Successful! 🎉",
        description: `Thank you ${formData.fullName}! We'll send confirmation to ${formData.email}`,
      });
    }

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      registrationType: "attend",
    });
    setIsSubmitting(false);
  };
  return (
    <section
      id="register"
      className="section-padding bg-muted/30 relative overflow-hidden"
    >
      <div className="container-wide relative z-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-widest opacity-0-initial animate-fade-up">
              Limited Seats
            </span>
            <h2 className="mb-3 sm:mb-4 opacity-0-initial animate-fade-up delay-100">
              <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Secure your{" "}
              </span>
              <span className="text-primary italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                spot
              </span>
            </h2>
          </div>

          {/* Registration Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl opacity-0-initial animate-fade-up delay-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-foreground text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-muted/50 border ${
                    errors.fullName ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-foreground text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-muted/50 border ${
                    errors.email ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors`}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-foreground text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="98XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-muted/50 border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors`}
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* College */}
              <div>
                <label className="block text-foreground text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  College
                </label>
                <input
                  type="text"
                  placeholder="Your institution"
                  value={formData.college}
                  onChange={(e) => handleInputChange("college", e.target.value)}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-muted/50 border ${
                    errors.college ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors`}
                />
                {errors.college && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.college}
                  </p>
                )}
              </div>
            </div>

            {/* Registration Type */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-foreground text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                I want to:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Attend Option */}
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange("registrationType", "attend")
                  }
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 ${
                    formData.registrationType === "attend"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/30 hover:border-muted-foreground/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.registrationType === "attend"
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/40"
                      }`}
                    >
                      {formData.registrationType === "attend" && (
                        <svg
                          className="w-3 h-3 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${
                          formData.registrationType === "attend"
                            ? "text-foreground"
                            : "text-foreground"
                        }`}
                      >
                        Attend
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">
                        Join as participant
                      </p>
                    </div>
                  </div>
                </button>

                {/* Ambassador Option */}
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange("registrationType", "ambassador")
                  }
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 ${
                    formData.registrationType === "ambassador"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/30 hover:border-muted-foreground/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.registrationType === "ambassador"
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/40"
                      }`}
                    >
                      {formData.registrationType === "ambassador" && (
                        <svg
                          className="w-3 h-3 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${
                          formData.registrationType === "ambassador"
                            ? "text-foreground"
                            : "text-foreground"
                        }`}
                      >
                        Ambassador
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">
                        Lead & earn rewards
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="cta"
              size="default"
              className="w-full group h-11 sm:h-12 sm:text-base md:h-14 md:px-10 md:text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register — It's Free"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Disclaimer */}
            <p className="text-center text-muted-foreground text-xs sm:text-sm mt-4 sm:mt-6">
              By registering, you agree to receive event updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default RegistrationSection;
