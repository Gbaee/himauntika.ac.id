export function Button({ children, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
