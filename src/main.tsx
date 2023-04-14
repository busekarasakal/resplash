import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Root } from './Root';

const router = createBrowserRouter(
  ['/*', '/s/:search?/:orientation?/:color?/:sort?'].map((path) => ({
    path,
    element: <Root />,
  })),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
