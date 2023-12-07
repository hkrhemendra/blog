import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/Root";
import BlogDetail from "./pages/BlogDetail";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'blog-detail',
          element: <BlogDetail/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
