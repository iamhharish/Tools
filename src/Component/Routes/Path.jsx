import HomePage from "../../Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import DevToolsPath from "../../Pages/Tools/DevTools/DevToolsPath";
import TextToolPath from "../../Pages/Tools/TextTools/TextToolPath";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {DevToolsPath()}
      {TextToolPath()}
    </Routes>
  );
};

export default Path;
