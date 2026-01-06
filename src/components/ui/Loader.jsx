import React from 'react';

const Loader = ({ 
  size = 'md', 
  color = 'primary', 
  fullScreen = false,
  text = 'Loading...',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  };

  const colors = {
    primary: 'border-xash-secondary-blue border-t-transparent',
    secondary: 'border-xash-accent-gold border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-400 border-t-transparent',
  };

  const spinner = (
    <div className={`animate-spin rounded-full ${sizes[size]} ${colors[color]} ${className}`} />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="flex flex-col items-center space-y-4">
          {spinner}
          {text && <p className="text-xash-dark-text dark:text-white font-medium">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {spinner}
      {text && <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>}
    </div>
  );
};

export default Loader;