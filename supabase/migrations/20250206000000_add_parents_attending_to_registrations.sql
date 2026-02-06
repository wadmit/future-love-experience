-- Add parents_attending to registrations (for landing form toggle).
-- Run in Supabase Dashboard → SQL Editor, or: supabase db push

ALTER TABLE registrations
  ADD COLUMN IF NOT EXISTS parents_attending boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN registrations.parents_attending IS 'Whether the registrant''s parents are attending the event';
