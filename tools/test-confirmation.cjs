// Run against generated Jekyll HTML. Set PLAYWRIGHT_MODULE to an installed
// Playwright module path. All network access is intercepted; no payment occurs.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const htmlPath = process.argv[2] || '_site/order/thanks/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');
const siteRoot = path.resolve(process.env.TEST_SITE_ROOT || path.resolve(path.dirname(htmlPath), '../..'));
const paid = { service: 'f-image-device', paid: true, livemode: true, amountFormatted: '$950', balanceDue: 0 };
const cases = [
  { name: 'Paid Forensics', data: paid, contains: '$950 received. Thank you.', success: true },
  { name: 'Balance retained', data: { ...paid, balanceDue: 40000, balanceDueFormatted: '$400' }, contains: 'Remaining service balance: $400.', success: true },
  { name: 'Studio service rejected', data: { ...paid, service: 'studio-family' } },
  { name: 'Missing service rejected', data: { ...paid, service: undefined } },
  { name: 'Null service rejected', data: { ...paid, service: null } },
  { name: 'Array service rejected', data: { ...paid, service: ['f-image-device'] } },
  { name: 'Null body', data: null },
  { name: 'Test payment', data: { ...paid, livemode: false }, contains: 'Test payment only.' },
  { name: 'Missing live flag', data: { ...paid, livemode: undefined }, contains: 'Test payment only.' },
  { name: 'Unpaid', data: { ...paid, paid: false }, contains: 'Payment is not confirmed yet.' },
  { name: 'String true is not paid', data: { ...paid, paid: 'true' }, contains: 'Payment is not confirmed yet.' },
  { name: 'String false is not paid', data: { ...paid, paid: 'false' }, contains: 'Payment is not confirmed yet.' },
  { name: 'Numeric flag is not paid', data: { ...paid, paid: 1 }, contains: 'Payment is not confirmed yet.' },
  { name: 'Missing paid flag', data: { ...paid, paid: undefined }, contains: 'Payment is not confirmed yet.' },
  { name: 'HTTP failure', status: 503, data: {} },
  { name: 'Network failure', abort: true },
  { name: 'Invalid JSON', raw: 'invalid' },
  { name: 'No URL reference', noReference: true, calls: 0 },
  { name: 'Provider markup remains text', data: { ...paid, amountFormatted: '<img src=x onerror="window.fixtureExecuted=true">' }, contains: '<img src=x', success: true }
];
(async () => {
  const browser = await chromium.launch({ headless: true }); const results = [];
  let viewportCases = 0;
  try {
    for (const c of cases) {
      const ctx = await browser.newContext({ viewport: { width: 1440, height: 950 } });
      let calls = 0; const pageErrors = [];
      await ctx.route('**/*', r => {
        const u = new URL(r.request().url());
        if (u.origin === 'https://forensics.wirewalk.com' && u.pathname === '/order/thanks/')
          return r.fulfill({ contentType: 'text/html', body: html });
        if (u.origin === 'https://forensics.wirewalk.com' && u.pathname.startsWith('/assets/')) {
          const asset = path.resolve(siteRoot, '.' + u.pathname);
          if (asset.startsWith(siteRoot + path.sep) && fs.existsSync(asset) && fs.statSync(asset).isFile())
            return r.fulfill({ body: fs.readFileSync(asset), contentType: asset.endsWith('.css') ? 'text/css' : asset.endsWith('.js') ? 'text/javascript' : 'application/octet-stream' });
        }
        if (u.origin === 'https://wirewalk-orders.wirewalk-upload.workers.dev' && u.pathname === '/session') {
          calls++; if (c.abort) return r.abort('failed');
          return r.fulfill({ status: c.status || 200, contentType: 'application/json', body: c.raw ?? JSON.stringify(c.data) });
        }
        return r.abort('blockedbyclient');
      });
      const page = await ctx.newPage(); page.on('pageerror', e => pageErrors.push(e.message));
      let failure;
      try {
        await page.goto('https://forensics.wirewalk.com/order/thanks/' + (c.noReference ? '' : '?session=cs_test_synthetic_fixture'), { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(() => !document.querySelector('#outcome').textContent.includes('Checking payment status'));
        const text = await page.locator('#outcome').innerText();
        assert.ok(text.includes(c.contains || 'Payment could not be confirmed here.'), text);
        assert.equal(text.includes('received. Thank you.'), !!c.success);
        assert.equal(calls, c.calls ?? 1); assert.deepEqual(pageErrors, []);
        assert.equal(await page.locator('#outcome img').count(), 0);
        assert.equal(await page.evaluate(() => !!window.fixtureExecuted), false);
        if (c === cases[0]) {
          for (const width of [1600,1440,1366,1280,1180,1080,1024,960,860,768,640,480,390]) {
            await page.setViewportSize({ width, height: 950 });
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth <= 1), `overflow at ${width}`);
            viewportCases++;
          }
        }
      } catch (e) { failure = e.message; }
      results.push({ name: c.name, passed: !failure, ...(failure ? { failure } : {}) }); await ctx.close();
    }
  } finally { await browser.close(); }
  const summary = { cases: results.length, passed: results.filter(r => r.passed).length, failed: results.filter(r => !r.passed).length, viewportCases, isolated: true };
  console.log(JSON.stringify(summary)); for (const r of results.filter(r => !r.passed)) console.log(JSON.stringify(r));
  if (process.env.VERIFY_RESULT_FILE) fs.writeFileSync(process.env.VERIFY_RESULT_FILE, JSON.stringify({ summary, results }, null, 2));
  if (summary.failed) process.exitCode = 1;
})().catch(e => { console.error(e); process.exitCode = 1; });
