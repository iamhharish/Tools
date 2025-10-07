import { useState } from "react"
import { XMLParser } from "fast-xml-parser";
const XMLToJson = () => {
  const [xmlInput, setXmlInput]=useState("");
  const [jsonOutput, setJsonOutput]=useState("");
  

  const handleConvert = () => {
    try {
      const parser = new XMLParser();
      const result = parser.parse(xmlInput);
      setJsonOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      setJsonOutput("Invalid XML!");
    }
  };

  return(
    <div>
      <h1>XML to JSON</h1>
      <textarea placeholder="Type your XML here..." value={xmlInput} onChange={(e)=> setXmlInput(e.target.value)}></textarea>
      <button onClick={handleConvert}>Convert</button>
      <pre>{jsonOutput}</pre>
    </div>
  )
}

export default XMLToJson