import { useSyncExternalStore } from 'react';

const subscribe = (onNetworkStatusChange: () => void) => {
  window.addEventListener('online', onNetworkStatusChange);
  window.addEventListener('offline', onNetworkStatusChange);

  return () => {
    window.removeEventListener('online', onNetworkStatusChange);
    window.removeEventListener('offline', onNetworkStatusChange);
  };
};

const getNetworkStatusSnapshot = () => navigator.onLine;

const useNetworkStatus = () => {
  const isOnline = useSyncExternalStore(subscribe, getNetworkStatusSnapshot);

  return isOnline;
};

export default useNetworkStatus;
