import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/Root";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import WriteBlog from "./pages/WriteBlog";
import VerifyOtp from "./pages/VerifyOtp";


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
        },
        {
          path: 'write-blog',
          element: <WriteBlog/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/verify-otp',
      element: <VerifyOtp/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
