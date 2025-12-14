import type { Handle } from '@sveltejs/kit';

const MAINTENANCE = true; // toggle this ON/OFF

export const handle: Handle = async ({ event, resolve }) => {
  const isMaintenancePage = event.url.pathname === '/maintenance';

  // ✅ Allow you in via cookie
  const isAdmin = event.cookies.get('admin') === 'true';

  if (MAINTENANCE && !isAdmin && !isMaintenancePage) {
    return Response.redirect(
      new URL('/maintenance', event.url),
      302
    );
  }

  return resolve(event);
};