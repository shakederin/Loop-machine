import { useState } from "react"
import ControlPanel from "./components/ControlPanel"
import Row from "./components/Row" 
import fileNames from "./helpers/fileNames"
import Colors from "./helpers/tracksColors.json"
function App() {

  const rowGenerator = () =>{
    const rowElements = fileNames.map((fileName, index)=>{
      return <Row key={fileName} track={fileName} color={Colors[index]}></Row>
    })
    return rowElements;
  }
  
  return (
    <div className="App">
      {rowGenerator()}
      <ControlPanel/>
    </div>
  );
}

export default App;
