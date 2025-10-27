export default function Header({ text }) {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 shadow-md mb-6 rounded-lg">
      <h1 className="text-2xl font-bold text-center">{text}</h1>
    </header>
  );
}
