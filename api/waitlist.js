// POST /api/waitlist { email } -> stores the email in Supabase table `waitlist` (email text primary key, created_at default now()).
// Needs env SUPABASE_URL and SUPABASE_SERVICE_KEY on Vercel. The key stays server-side only.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validEmail(value) {
  return typeof value === 'string' && value.length <= 254 && EMAIL.test(value.trim());
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  const email = req.body && req.body.email;
  if (!validEmail(email)) return res.status(400).json({ error: 'invalid_email' });

  const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return res.status(500).json({ error: 'not_configured' });

  const r = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify({ email: email.trim().toLowerCase() }),
  });
  if (!r.ok) return res.status(502).json({ error: 'store_failed' });
  // Plain HTML form post (no JavaScript): send the visitor back to the page instead of raw JSON.
  if (String(req.headers?.['content-type']).startsWith('application/x-www-form-urlencoded')) {
    // Fixed paths only: the form's lang field never builds the URL.
    res.setHeader('Location', req.body.lang === 'it' ? '/it#lista' : '/#lista');
    return res.status(303).end();
  }
  return res.status(201).json({ ok: true });
}
