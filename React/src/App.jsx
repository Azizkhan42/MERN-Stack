import Card from "./components/Card";

const App = () => {
  return <div>
    <h1 className="text-3xl font-bold text-center">Our Employees</h1>
    <div className="flex flex-wrap justify-center">
      <Card title="Aziz Ur Rehman" description="Software Engineer" />
      <Card title="Waqar" description="Product Manager" />
      <Card title="Junaid" description="Designer" />
    </div>
  </div>;
};

export default App;
