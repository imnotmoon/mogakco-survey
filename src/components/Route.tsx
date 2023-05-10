import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HomePage</div>,
  },
  {
    path: '/result',
    element: <div>ResultPage</div>,
  },
]);
