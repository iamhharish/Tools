import { Route } from "react-router-dom"
import ShowText from "./ShowText/ShowText"

const TextToolPath = () => {
  return (
    <>
    <Route path="/texttools/showtext" element={<ShowText/>}/>
    </>
  )
}

export default TextToolPath