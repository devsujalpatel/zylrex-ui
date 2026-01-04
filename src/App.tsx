import Button from "./components/Button";

const App = () => {
  return (
    <main>
      <h1>Hello, World</h1>
      <div className="space-x-2">
        <Button variant={"default"}>Click Me</Button>
        <Button variant={"destructive"}>Cancel</Button>
        <Button variant={"primary"}>Cancel</Button>
        <Button variant={"warning"}>Cancel</Button>
        <Button variant={"outline"}>Cancel</Button>
      </div>
    </main>
  );
};

export default App;
