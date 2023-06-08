import Header from "./components/layouts/Header";
import Home from "./pages/Home/Home";

function App() {
  setInterval(() => {
    document.querySelector("#preload").classList.add("hidden");
  }, 3000);
  return (
    <div className="App w-screen overflow-x-hidden">
      <div id="preload" className="fixed w-screen h-screen bg-base-200 z-50">
        <span className="loading loading-spinner text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
