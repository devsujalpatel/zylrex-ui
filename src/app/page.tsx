import Button from "@/components/Button";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-6 bg-neutral-50">
      <div className="space-x-2">
        <Button variant={"default"}>Click Me</Button>
        <Button variant={"destructive"}>Cancel</Button>
        <Button variant={"warning"}>Warning</Button>
        <Button variant={"outline"}>Outline</Button>
      </div>
    </main>
  );
};

export default Home;
