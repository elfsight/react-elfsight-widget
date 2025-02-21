import { useEffect } from 'react';

const PLATFORM_URL = 'https://static.elfsight.com/platform/platform.js';

export function useLoadPlatform() {
  useEffect(() => {
    const isPlatformLoaded =
      'eapps' in window ||
      !!document.querySelector(`script[src="${PLATFORM_URL}"]`);

    if (isPlatformLoaded) {
      return;
    }

    const platformScript = document.createElement('script');
    platformScript.src = PLATFORM_URL;
    platformScript.dataset.testid = 'platform-script';

    document.body.appendChild(platformScript);

    // platform cannot be loaded twice on the same page
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
}
