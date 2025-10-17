export default function Button({ label, onClick, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded-lg font-semibold transition-all duration-200';
  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700 active:scale-95`,
    secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300 active:scale-95`,
    outline: `${base} border border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  );
}
