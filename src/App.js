import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos al maravilloso mundo de la aromaterapia" />
        <ItemCount/>
      </header>
    </div>
  );
}

export default App;
