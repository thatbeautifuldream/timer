import { Toaster } from "react-hot-toast";
import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Timer />
      <p className="made-by">Made with a 💔 and broken css, ofcourse.</p>
    </div>
  );
}

export default App;
