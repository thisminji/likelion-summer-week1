// App.jsx
import "./App.css";
import Timer from "./components/Timer";

function App() {

  return (
    <>
    
    {/* props.children을 사용하지 않는 경우 self-closing으로 사용할 것 */}
    <Timer/>
    </>
  );
}

export default App;
