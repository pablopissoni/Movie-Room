import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/page/HomePage";
import { Detail } from "./components/Detail";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
        <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail/>} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
