import { useEffect } from 'react';

const PLATFORM_URL = 'https://static.elfsight.com/platform/platform.js';

export function useLoadPlatform(modern: boolean) {
  useEffect(() => {
    const isPlatformLoaded =
      'eapps' in window ||
      !!document.querySelector(`script[src="${PLATFORM_URL}"]`);
    if (isPlatformLoaded) {
      return;
    }
    const platfromScript = document.createElement('script');
    platfromScript.src = PLATFORM_URL;
    platfromScript.dataset.testid = 'platform-script';
    if (modern) {
      platfromScript.dataset.useServiceCore = '';
    }
    document.body.appendChild(platfromScript);
    // platform cannot be loaded twice on the sampe page
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
}
