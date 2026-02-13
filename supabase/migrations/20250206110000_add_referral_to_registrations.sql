-- Add referral source from URL query (?referral=...) at registration.
-- Run in Supabase Dashboard → SQL Editor, or: supabase db push

ALTER TABLE registrations
  ADD COLUMN IF NOT EXISTS referral text;

COMMENT ON COLUMN registrations.referral IS 'Referral code/source from URL query param when user registered';
