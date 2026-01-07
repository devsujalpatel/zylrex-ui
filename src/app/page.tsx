import Button from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-6 bg-background text-foreground">
      <div className="space-x-2">
        <Button variant={"default"}>Click Me</Button>
        <Button variant={"pramary"}>Submit</Button>
        <Button variant={"destructive"}>Cancel</Button>
        <Button variant={"warning"}>Warning</Button>
      </div>
      <div className="w-full m-6 max-w-md">
        <Card variant={"raised"}>
          <CardHeader>
            <CardTitle>This is my title</CardTitle>
            <CardDescription>
              This is a description for my card component.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>This is one benefit</li>
              <li>This is another benefit</li>
              <li>This is yet another benefit</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="pramary">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Home;
