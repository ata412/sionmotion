// The shared static document was prerendered for Home. Render the new route
// from its own component when it is opened directly or refreshed.
const staticRoute = location.pathname.replace(/\/$/, '');

if (staticRoute === '/commercial-production' || staticRoute === '/logo') {
  const payload = document.getElementById('__NUXT_DATA__');
  if (payload) {
    const data = JSON.parse(payload.textContent);
    data[data[0].path] = staticRoute;
    data[0].serverRendered = data.push(false) - 1;
    payload.textContent = JSON.stringify(data);
    payload.dataset.ssr = 'false';
    document.getElementById('__nuxt').replaceChildren();
  }
}

if (staticRoute === '/logo') {
  const script = document.createElement('script');
  script.src = '/logo-work-showcase.js';
  document.body.append(script);
}
