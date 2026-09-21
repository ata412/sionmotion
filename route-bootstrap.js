// The shared static document was prerendered for Home. Render the new route
// from its own component when it is opened directly or refreshed.
const staticRoute = location.pathname.replace(/\/$/, '');

const appRoutes = new Set([
  '/logo',
  '/typography',
  '/color',
  '/photography',
  '/campaign',
  '/motion',
  '/commercial-production'
]);

const isServicesRoute = staticRoute === '/services' || staticRoute.startsWith('/services/');
const isAiSolutionRoute = staticRoute === '/ai-solution';
const isDigitalMarketingRoute = staticRoute === '/digital-marketing';

if (appRoutes.has(staticRoute) || isServicesRoute || isAiSolutionRoute || isDigitalMarketingRoute) {
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

if (isServicesRoute) {
  window.__SION_SERVICES_ROUTE__ = staticRoute;
  const servicesScript = document.createElement('script');
  servicesScript.src = '/services-page.js?v=20260920-01';
  document.head.append(servicesScript);
}

if (isAiSolutionRoute) {
  const aiSolutionScript = document.createElement('script');
  aiSolutionScript.src = '/ai-solution-page.js?v=20260920-03';
  document.head.append(aiSolutionScript);
}

if (isDigitalMarketingRoute) {
  const digitalMarketingScript = document.createElement('script');
  digitalMarketingScript.src = '/digital-marketing-page.js?v=20260921-01';
  document.head.append(digitalMarketingScript);
}
