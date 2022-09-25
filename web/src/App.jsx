import "./App.css";
import BottomWords from "./components/BottomWords";
import HeaderBar from "./components/HeaderBar";
import MainTable from "./components/MainTable.jsx";
import ServerBar from "./components/ServerBar";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <ServerBar />
      <h1 className="mainTitle">빙고</h1>
      <MainTable />
      <BottomWords />
    </div>
  );
}

export default App;
