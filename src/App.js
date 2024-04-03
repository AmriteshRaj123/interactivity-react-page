import Event from "./component/Event";
import Welcome from "./component/Welcome";
import DataSubmit from "./component/DataSubmit";
function App() {
  return (
    <>
      {/* <Event onPlayMusic={()=>alert("Playing")} uploadImage={()=>alert("Uploading")}/> */}
      {/* <Welcome></Welcome> */}
      <DataSubmit></DataSubmit>
    </>
  );
}

export default App;
