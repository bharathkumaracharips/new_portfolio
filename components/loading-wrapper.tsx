'use client';

import { useState, useEffect } from 'react';
import { Loading } from '@/components/ui/circle-unique-load';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [showSlowLoading, setShowSlowLoading] = useState(false);

  useEffect(() => {
    // Check if page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
      setShowSlowLoading(false);
    };

    // Show loading indicator if page takes too long
    const slowLoadTimer = setTimeout(() => {
      if (isLoading) {
        setShowSlowLoading(true);
      }
    }, 1000); // Show after 1 second

    // Check online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Listen for network status changes
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(slowLoadTimer);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isLoading]);

  // Show loading screen if offline or loading is slow
  if (!isOnline || showSlowLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background">
        <Loading screenHFull={true} />
        {!isOnline && (
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <p className="text-sm text-muted-foreground">
              No internet connection. Please check your network.
            </p>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
