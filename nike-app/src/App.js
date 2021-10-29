import './styles/styles.css';
import Search from './components/Search';
import Logo from './components/Logo';
import WomenBtn from './components/WomenBtn';
import MenBtn from './components/MenBtn';

function App() {
  return (
    <div className="App">
      <section className="landingPage">
        <div className="navigation">
          <Logo/>
          <WomenBtn/>
          <MenBtn/>
          <Search/>
        </div>

      </section>
    </div>
  );
}

export default App;
