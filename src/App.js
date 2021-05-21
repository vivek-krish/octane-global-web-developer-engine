import logo from './logo.svg';
import './App.css';
import  Home from './views/Home'
import MenuBar from './components/MenuBar'


function App() {
  const names = ['asdf','qewr', 'erty'];
  return (
    <div className="App">
      <MenuBar />
      <Home/>

    </div>
  );
}

export default App;
