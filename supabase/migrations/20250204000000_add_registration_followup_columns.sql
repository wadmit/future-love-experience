-- Add columns for follow-up tracking on registrations.
-- Run this in Supabase Dashboard → SQL Editor.

ALTER TABLE registrations
  ADD COLUMN IF NOT EXISTS contacted boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS attendance_status text CHECK (attendance_status IN ('attending', 'maybe_attending', 'no')),
  ADD COLUMN IF NOT EXISTS notes text,
  ADD COLUMN IF NOT EXISTS updated_by text,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz;

COMMENT ON COLUMN registrations.contacted IS 'Whether the registrant has been contacted';
COMMENT ON COLUMN registrations.attendance_status IS 'attending | maybe_attending | no';
COMMENT ON COLUMN registrations.notes IS 'Free-text notes';
COMMENT ON COLUMN registrations.updated_by IS 'Email of dashboard user who last updated this row';
COMMENT ON COLUMN registrations.updated_at IS 'When the row was last updated';

-- If you use RLS, allow anon to update (e.g. for dashboard editors):
-- CREATE POLICY "Allow anon update registrations" ON registrations FOR UPDATE TO anon USING (true) WITH CHECK (true);
