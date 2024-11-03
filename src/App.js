import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from "react";
import Map from "./segments/map";
import Start from "./segments/start";
import Welcome from "./segments/welcome";

function App() {
  const [Data, setData] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Map Data={Data} />} >
          <Route path="/start" element={<Start SetData={setData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
