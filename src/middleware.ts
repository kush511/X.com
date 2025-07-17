import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Include both sign-in and sign-up routes as public
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/signup(.*)',  // Add this for consistency
  '/sign-up(.*)'  // Keep this as well
]);

export default clerkMiddleware((auth, req) => {
  // Redirect to sign-in if not authenticated and not on a public route
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};