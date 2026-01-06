import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to,
  href,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-[#1F6AE1] text-white hover:bg-blue-700 focus:ring-[#1F6AE1] dark:bg-[#1F6AE1] dark:hover:bg-blue-600',
    secondary: 'bg-[#F5B700] text-[#1A1A1A] hover:bg-yellow-600 focus:ring-[#F5B700] dark:bg-[#F5B700] dark:hover:bg-yellow-600',
    outline: 'border-2 border-[#1F6AE1] text-[#1F6AE1] hover:bg-[#1F6AE1]/10 focus:ring-[#1F6AE1] dark:border-[#1F6AE1] dark:text-[#1F6AE1] dark:hover:bg-[#1F6AE1]/20',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    ghost: 'text-[#1F6AE1] hover:bg-[#1F6AE1]/10 focus:ring-[#1F6AE1] shadow-none dark:text-[#1F6AE1] dark:hover:bg-[#1F6AE1]/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const content = (
    <>
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
          Loading...
        </>
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          {children}
        </>
      )}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;