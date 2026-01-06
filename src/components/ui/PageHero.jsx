import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageHero = ({ 
  title, 
  description, 
  breadcrumbItems, 
  gradient = "from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]",
  children 
}) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} dark:from-gray-800 dark:via-gray-900 dark:to-gray-800`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-blue-100 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;