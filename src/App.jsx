import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

//layouts
import RootLayout from "./layout/RootLayout";
//pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: `/quiz/:title`,
          element: <Quiz />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
