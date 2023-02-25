import Header from "./components/Header"
import Tile from "./components/Tile"
import data from "./data"


function App() {

  const tiles = data.map(item => {
    return <Tile 
      key={item.id}
      {...item}
    />
  })

  return (
    <div className="App">
      <Header />
      {tiles}
    </div>
  );
}

export default App;
