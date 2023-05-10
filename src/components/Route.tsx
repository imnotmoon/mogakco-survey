import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    // errorElement: <FallbackPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
]);
