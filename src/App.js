import './App.css';
import NavBar from './components/NavBar/NavBar';
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer';*/
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
        {/*<ItemListContainer greeting="Bienvenidos al maravilloso mundo de la aromaterapia" />*/}
      </header>
    
      <ItemDetail/>
    </div>
  );
}

export default App;
