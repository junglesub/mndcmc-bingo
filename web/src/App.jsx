import "./App.css";
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
    </div>
  );
}

export default App;
