import React from "react";
import Hello from './components/Hello'

function App() {
  return (
    <div>
      <h1 className="font-bold pt-4 text-2xl">ReactJs with TailwindCSS</h1>

      <Hello name="Aziz"></Hello>
      <Hello name="Ahmad"></Hello>
      <Hello name="Waqas"></Hello>
    </div>
  );
}

export default App;
