import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  padding = true,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 shadow-xl border border-gray-50 dark:border-gray-700',
    outline: 'border-2 border-[#1F6AE1] dark:border-[#1F6AE1] bg-transparent',
    flat: 'bg-[#F5F7FA] dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700',
    gradient: 'bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-lg border border-gray-100 dark:border-gray-700',
  };

  const hoverStyles = hover 
    ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer hover:border-[#1F6AE1] dark:hover:border-[#1F6AE1]' 
    : '';

  const paddingStyles = padding ? 'p-6' : '';

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', border = true }) => (
  <div className={`${border ? 'border-b border-gray-200 dark:border-gray-700' : ''} pb-4 mb-4 ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', padding = true }) => (
  <div className={`${padding ? 'py-2' : ''} ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', border = true }) => (
  <div className={`${border ? 'border-t border-gray-200 dark:border-gray-700' : ''} pt-4 mt-4 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;