import Button from "./components/Button";

const App = () => {
  return (
    <main>
      <h1>Hello, World</h1>
      <div className="space-x-2">
        <Button className="text-primary">Click Me</Button>
        <Button>Cancel</Button>
      </div>
    </main>
  );
};

export default App;
