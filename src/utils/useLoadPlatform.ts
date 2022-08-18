import { useEffect } from 'react';

const PLATFORM_URL = 'https://static.elfsight.com/platform/platform.js';

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
  return !!document.querySelector(`script[src="${PLATFORM_URL}"]`);
}

function loadPlatform() {
  const scriptElement = document.createElement('script');
  scriptElement.src = PLATFORM_URL;
  scriptElement.defer = true;
  document.head.appendChild(scriptElement);
}
