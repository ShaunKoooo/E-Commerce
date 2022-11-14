import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import PostDetail from './containers/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/post/:id",
    element: <PostDetail/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
