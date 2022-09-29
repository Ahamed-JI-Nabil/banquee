import './App.css';
import Home from './components/Pages/Home';
import Footer from './components/Shared/Footer';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <div className="text-black">
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
