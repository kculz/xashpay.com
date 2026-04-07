export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300';
  const variants = {
    primary: 'bg-xash-gold text-xash-primary hover:bg-yellow-400 px-6 py-3 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-xash-primary hover:bg-gray-50 px-6 py-3 shadow-md hover:shadow-lg',
    outline: 'border-2 border-xash-primary text-xash-primary hover:bg-xash-primary hover:text-white px-6 py-3',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}