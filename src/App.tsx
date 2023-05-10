import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { router } from './components/Route';

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
