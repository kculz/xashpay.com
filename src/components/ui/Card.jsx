export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-3xl shadow-soft p-8 hover:shadow-lg transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}