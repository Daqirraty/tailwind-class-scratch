
import {
  // BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
// import Home from './screens/Home.jsx'
// import Login from "./screens/Login.jsx";
// import Responsiveness from "./screens/responsiveness.jsx";
// import Bolu from "./screens/Bolu.jsx";
// import Ademola from "./screens/Ademola.jsx";
import AllRoutes from "../src/routes/AllRoutes.jsx";
function App() {

  return (
      // <BrowserRouter>
      // <Routes>
      //   <Route path="/" element={<Home/>} />
      //   <Route path="/login" element={<Login/>} />
      //   <Route path="/about" element={<Responsiveness/>} />
      //   <Route path="/contact" element={<Bolu/>} />
      //   <Route path="/ademola" element={<Ademola/>} />
      // </Routes>
      // </BrowserRouter>

      <Routes>
        {AllRoutes.map((route, index) => (
          <Route key={index} path={route.paths} element={route.element} />
        ))}
      </Routes>
      //
  )
}

export default App
