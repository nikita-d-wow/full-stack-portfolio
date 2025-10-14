import Dashboard from './Dashboard';
import useLocalStorage from '../custom hooks/useLocalStorage';

export default function Home() {
  const [todos] = useLocalStorage('todos', []);
  return (
    <div className="flex flex-col gap-4">
      <Dashboard todos={todos} />
    </div>
  );
}
