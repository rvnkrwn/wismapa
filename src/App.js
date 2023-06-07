import Header from './components/layouts/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
