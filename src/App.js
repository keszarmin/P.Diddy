import {HashRouter,Routes,Route, Navigate} from "react-router-dom"
import { useState } from "react";
import Map from "./segments/map";
import Start from "./segments/start";
import Welcome from "./segments/welcome";
import Feladata_1 from "./segments/task_pages/1_feladat";
import WrongCH from "./segments/task_pages/wrongCH";
import Machine from "./segments/task_pages/2_feladat";
import Feladat_3 from "./segments/task_pages/3_feladat";
import About from "./segments/task_pages/About";

function App() {
  const [Data, setData] = useState([])
  return (
    <HashRouter>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/wrongCh/:value" element={<WrongCH />} />
        <Route path="/wrongCh" element={<Navigate to={"/"} replace />} />
        <Route index element={<Welcome />} />
        <Route path="/" element={<Map Data={Data} />} >
          <Route path="/start" element={<Start SetData={setData} />} />
          <Route path="/Feladat_1" element={<Feladata_1 SetData={setData}  />} />
          <Route path="/Feladat_2" element={<Machine SetData={setData} />} />
          <Route path="/Feladat_3" element={<Feladat_3 setData={setData} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
