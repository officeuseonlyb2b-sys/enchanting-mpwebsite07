CREATE TABLE public.form_submission_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_name text NOT NULL,
  full_name text,
  email text,
  phone text,
  message_hash text,
  ip_address text,
  status text NOT NULL,
  reason text,
  metadata jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.form_submission_log TO service_role;

ALTER TABLE public.form_submission_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage form submission log"
ON public.form_submission_log FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

CREATE INDEX idx_form_log_ip_created ON public.form_submission_log (ip_address, created_at DESC);
CREATE INDEX idx_form_log_dupe ON public.form_submission_log (email, phone, message_hash, created_at DESC);