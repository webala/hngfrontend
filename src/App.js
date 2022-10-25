import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Socials from './components/Socials/Socials';
import Tree from './components/Tree/Tree';

function App() {
  return (
    <div className="App">
      <Header />
      <Tree />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
