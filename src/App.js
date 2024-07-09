import AllRoutes from "./Routes.js";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <Router>
      <ContextProvider>
        <AllRoutes />
      </ContextProvider>
    </Router>
  );
}

export default App;
