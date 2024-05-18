import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";
import Rejected from "./pages/Rejected"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages" >
        <Routes>
          <Route path="/" element={<Disclaimer/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path ="/aboutus" element={<Aboutus/>}></Route>
          <Route path ="/rejected" element={<Rejected/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;