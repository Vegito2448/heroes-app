import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth";
import { router } from './routers';

function App() {
  return (
    <AuthProvider children={<RouterProvider router={router} />} />
  );
}

export default App;
