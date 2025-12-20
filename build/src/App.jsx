import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Dock from "./components/layout/Dock"; // Import Dock

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30">
      
      <main className="pb-32"> {/* Add padding-bottom so the Dock doesn't cover content */}
        <Hero />
        <Projects />
      </main>

      {/* The Dock floats on top */}
      <Dock />
      
    </div>
  );
}

export default App;