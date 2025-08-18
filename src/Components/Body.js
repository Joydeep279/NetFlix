import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
