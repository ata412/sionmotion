// The shared static document was prerendered for Home. Render the new route
// from its own component when it is opened directly or refreshed.
if (location.pathname.replace(/\/$/, '') === '/commercial-production') {
  const payload = document.getElementById('__NUXT_DATA__');
  if (payload) {
    const data = JSON.parse(payload.textContent);
    data[data[0].path] = '/commercial-production';
    data[0].serverRendered = data.push(false) - 1;
    payload.textContent = JSON.stringify(data);
    payload.dataset.ssr = 'false';
    document.getElementById('__nuxt').replaceChildren();
  }
}
