import Button from "../components/Button";
import Card from "../components/Card";
import TaskManager from "../components/TaskManager";

function Home() {
  return (
    <div className="flex flex-col items-center gap-10 p-6">
      <Card title="Reusable UI">
        <p className="mb-4">This is a simple card using Tailwind CSS.</p>
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>

      <TaskManager />
    </div>
  );
}

export default Home;
