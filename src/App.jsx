import ControlPanel from "./components/ControlPanel"
import Cursor from "./components/Cursor"
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
      <h1>Loop-Machine</h1>
      <div className="relative">
        <Cursor/>
        <div className="rowRap">
          {rowGenerator()}
        </div>
      </div>
      <ControlPanel/>
    </div>
  );
}

export default App;
