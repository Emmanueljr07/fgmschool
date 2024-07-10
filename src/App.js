import AllRoutes from "./Routes.js";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Notification from "./Components/user/Notification.jsx";
import Loading from "./Components/user/Loading.jsx";

function App() {
  return (
    <>
      <ContextProvider>
        <Loading />
        <Notification />
        <Router>
          <AllRoutes />
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
