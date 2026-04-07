export default function PillBadge({ children, variant = 'gray', className = '' }) {
  const variants = {
    gray: 'bg-gray-100 text-gray-700 border border-gray-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    gold: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    green: 'bg-green-50 text-green-700 border border-green-200',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
