import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Transaction from "./pages/Transaction";
import Wrapper from "./components/Wrapper";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      children: [
        { index: true, element: <Index /> },
        { path: "transaction", element: <Transaction /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
