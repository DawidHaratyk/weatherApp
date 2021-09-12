import "./css/index.css";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="app">
      <div className="weather">
        <h1 className="weather__headline">Weather in</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
