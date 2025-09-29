import ReactDOM from 'react-dom/client'
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';
import 'material-design-lite/material';
import 'material-design-icons/iconfont/MaterialIcons-Regular.ttf';
import 'material-design-icons/iconfont/MaterialIcons-Regular.woff2';

import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
// Create a new router instance
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
