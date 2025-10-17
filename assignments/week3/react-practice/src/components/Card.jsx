export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      {title && <h3 className="text-lg font-bold mb-3 text-gray-800">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
