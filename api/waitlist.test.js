import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler, { validEmail } from './waitlist.js';

function mockRes() {
  return { code: 0, body: null, headers: {}, setHeader(k, v) { this.headers[k] = v; },
    status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; } };
}

test('validEmail', () => {
  assert.ok(validEmail('anna@esempio.it'));
  assert.ok(!validEmail('anna@esempio'));
  assert.ok(!validEmail('nope'));
  assert.ok(!validEmail(42));
});

test('rejects bad email and wrong method', async () => {
  let res = mockRes();
  await handler({ method: 'GET' }, res);
  assert.equal(res.code, 405);
  res = mockRes();
  await handler({ method: 'POST', body: { email: 'x' } }, res);
  assert.equal(res.code, 400);
});

test('stores lowercased email in Supabase', async () => {
  process.env.SUPABASE_URL = 'https://db.example';
  process.env.SUPABASE_SERVICE_KEY = 'k';
  let sent;
  globalThis.fetch = async (url, opts) => { sent = { url, opts }; return { ok: true }; };
  const res = mockRes();
  await handler({ method: 'POST', body: { email: ' Anna@Esempio.it ' } }, res);
  assert.equal(res.code, 201);
  assert.equal(sent.url, 'https://db.example/rest/v1/waitlist');
  assert.deepEqual(JSON.parse(sent.opts.body), { email: 'anna@esempio.it' });
});

test('plain form post redirects back to the page', async () => {
  globalThis.fetch = async () => ({ ok: true });
  const res = mockRes();
  res.end = function () { return this; };
  await handler({ method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: { email: 'anna@esempio.it' } }, res);
  assert.equal(res.code, 303);
  assert.equal(res.headers.Location, '/#lista');
});

test('form post redirects back by language', async () => {
  globalThis.fetch = async () => ({ ok: true });
  for (const [lang, to] of [['it', '/it#lista'], ['en', '/#lista'], ['//evil.com', '/#lista'], [undefined, '/#lista']]) {
    const res = mockRes();
    res.end = function () { return this; };
    await handler({ method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: { email: 'anna@esempio.it', lang } }, res);
    assert.equal(res.headers.Location, to, `lang=${lang}`);
  }
});
