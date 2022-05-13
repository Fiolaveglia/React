import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos al maravilloso mundo de la aromaterapia" />
      </header>
    </div>
  );
}

export default App;
