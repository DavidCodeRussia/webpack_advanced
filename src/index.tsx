import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {App} from './components/App';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'...loading'}><LazyAbout /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback={'...loading'}><LazyShop /></Suspense>
      },
    ]
  }
])

const container = createRoot(root)
container.render(<RouterProvider router={router} />)