import './App.css';
import Home from './components/Pages/Home';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <div className="text-black">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
