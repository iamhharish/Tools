import { Route } from "react-router-dom";
import XMLToJson from "./XMLToJson/XMLToJson";
import JsonToXML from "./JsonToXML/JsonToXML";

const DevToolsPath = () => {
  return (
    <>
      <Route path="/devtools/xmltojson" element={<XMLToJson />} />
      <Route path="/devtools/jsontoxml" element={<JsonToXML />} />
    </>
  );
};

export default DevToolsPath;
