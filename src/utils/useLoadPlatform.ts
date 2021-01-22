import { useEffect } from 'react';

const PLATFORM_URI = 'https://apps.elfsight.com/p/platform.js';

export function useLoadPlatform() {
  useEffect(() => {
    if (!isPlatformLoaded()) {
      loadPlatform();
    }
  }, []);
}

function isPlatformLoaded() {
  return isPlatformInitialized() || hasPlatformScript();
}

function isPlatformInitialized() {
  return 'eapps' in window;
}

function hasPlatformScript() {
  return !!document.querySelector(`script[src="${PLATFORM_URI}"]`);
}

function loadPlatform() {
  const scriptElement = document.createElement('script');
  scriptElement.src = PLATFORM_URI;
  scriptElement.defer = true;
  document.head.appendChild(scriptElement);
}
