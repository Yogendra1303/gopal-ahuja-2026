'use client';

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Only track in production or if explicitly testing
  if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_LOCAL_TRACKING) {
    console.log(`[Analytics Blocked] ${eventName}`, properties);
    return;
  }

  try {
    fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        url: window.location.href,
        path: window.location.pathname,
        properties,
      }),
      // Use keepalive to ensure the request is sent even if the user navigates away
      keepalive: true,
    });
  } catch (err) {
    console.error('Failed to track event:', err);
  }
};
