import './App.css'
import {Excalidraw} from "@excalidraw/excalidraw";
import {useState} from "react";
import {ExcalidrawImperativeAPI} from "@excalidraw/excalidraw/types/types";

function App() {
  const [api, setApi] = useState<ExcalidrawImperativeAPI>();

  return (
    <Excalidraw
      zenModeEnabled={true}
      gridModeEnabled={true}
      excalidrawAPI={setApi}
    >
    </Excalidraw>
  )
}

export default App
