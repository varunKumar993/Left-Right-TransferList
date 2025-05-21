import "./App.css";
import { items } from "./Data";
import TransferList from "./TransferList";

function App() {
  return (
    <>
      <TransferList initialItems={items}></TransferList>
    </>
  );
}

export default App;
