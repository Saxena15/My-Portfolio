import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="page-background">
      <div className="container-box">
        <main className="content-wrapper">
          <Header />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
