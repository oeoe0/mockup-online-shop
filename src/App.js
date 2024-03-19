import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className='main-container'>
        <Hero />
        <Overview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
