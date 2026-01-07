import Button from "@/components/button";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-6 bg-background text-foreground">
      <div className="space-x-2">
        <Button variant={"default"}>Click Me</Button>
        <Button variant={"pramary"}>Submit</Button>
        <Button variant={"destructive"}>Cancel</Button>
        <Button variant={"warning"}>Warning</Button>
      </div>
    </main>
  );
};

export default Home;
