-- Add parent_phone for when parents are attending (landing form).
-- Run in Supabase Dashboard → SQL Editor, or: supabase db push

ALTER TABLE registrations
  ADD COLUMN IF NOT EXISTS parent_phone text;

COMMENT ON COLUMN registrations.parent_phone IS 'Parent contact phone (10 digits) when parents_attending is true';
