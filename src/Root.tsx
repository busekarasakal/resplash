import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App';

const queryClient = new QueryClient();

export function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
