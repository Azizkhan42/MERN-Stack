import React from "react";
import Hello from './components/Hello'
import Button from "./components/Button";

function App() {
  function Message(){
    alert("Hello, this is alert using props function")
  }
  function data(){
    alert("Data has been submitted successfully")
  }
  const userData ={
    name: "Aziz",
    age: 22,
    isStudent: true
  }
  return (
    <div>
      <h1 className="font-bold pt-4 text-2xl">ReactJs with TailwindCSS</h1>

      <Hello name="Aziz"></Hello>
      <Hello name="Ahmad"></Hello>
      <Hello name="Waqas"></Hello>

      <Button Message={Message} label="Click me"></Button>
      <Button Message={data} label="Enter data" userData={userData}></Button>
    </div>
  );
}

export default App;
