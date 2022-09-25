import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainTable from "./components/MainTable.jsx";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <h1 className="mainTitle">빙고</h1>
      <MainTable />
    </div>
  );
}

export default App;
