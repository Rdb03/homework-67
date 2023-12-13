import './App.css'
import {Route, Routes} from "react-router-dom";
import DoorLock from "./containers/DoorLock/DoorLock.tsx";
import NoFound from "./components/NoFound/NoFound.tsx";

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<DoorLock />} />
            <Route path="*" element={<NoFound />} />
            </Routes>
    </>
  )
};

export default App
