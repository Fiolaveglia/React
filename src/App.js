import './App.css';
import NavBar from './components/NavBar/NavBar';
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer';*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
        {/*<ItemListContainer greeting="Bienvenidos al maravilloso mundo de la aromaterapia" />*/}
      </header>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
