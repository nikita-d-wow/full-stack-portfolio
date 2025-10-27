import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6 p-4">
      <Header text="✨ My Tailwind Component Library ✨" />

      <Card title="Reusable Card Component">
        <p className="mb-4">This is an example of component composition using Tailwind CSS.</p>
        <div className="flex gap-3">
          <Button label="Primary" variant="primary" onClick={() => alert('Primary Click!')} />
          <Button label="Secondary" variant="secondary" />
          <Button label="Outline" variant="outline" />
        </div>
      </Card>
    </div>
  );
}
