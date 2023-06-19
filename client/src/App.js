
import { Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import MyRoute from "./components/MyRoute";
import { BrowserRouter } from "react-router-dom";
import Tester from "./components/Tester";
function App() {
  return (
    <BrowserRouter>
<MyRoute/>
    </BrowserRouter>

  );
}

export default App;
