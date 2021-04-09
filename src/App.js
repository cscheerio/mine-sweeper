import "./styles.css";
import Board from "./gameBoard/Board.js";

export default function App() {
  return (
    <div className="App">
      <h1>Mine Sweeper</h1>
      <div className="grid">
        <Board />
      </div>
    </div>
  );
}
