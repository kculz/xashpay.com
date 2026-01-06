import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * ImageWithSkeleton Component
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} className - Additional CSS classes for the image container
 * @param {object} skeletonProps - Props to pass to the Skeleton component
 * @param {boolean} showError - Whether to show error state
 * @param {React.ReactNode} errorFallback - Custom error fallback component
 * @param {string} loadingStrategy - 'lazy' or 'eager'
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback when image fails to load
 * @param {object} imageProps - Additional props for the img element
 * @returns {JSX.Element}
 */
const ImageWithSkeleton = ({
  src,
  alt = '',
  className = '',
  skeletonProps = {},
  showError = true,
  errorFallback = null,
  loadingStrategy = 'lazy',
  onLoad = null,
  onError = null,
  imageProps = {},
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // Default skeleton props
  const defaultSkeletonProps = {
    baseColor: '#f3f4f6',
    highlightColor: '#e5e7eb',
    borderRadius: '0.5rem',
    duration: 1.5,
    enableAnimation: true,
    ...skeletonProps,
  };

  // Reset states when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleImageLoad = (e) => {
    setIsLoading(false);
    setHasError(false);
    
    // Get actual image dimensions
    if (e.target) {
      setImageDimensions({
        width: e.target.naturalWidth,
        height: e.target.naturalHeight,
      });
    }
    
    // Call custom onLoad callback if provided
    if (onLoad && typeof onLoad === 'function') {
      onLoad(e);
    }
  };

  const handleImageError = (e) => {
    setIsLoading(false);
    setHasError(true);
    
    // Call custom onError callback if provided
    if (onError && typeof onError === 'function') {
      onError(e);
    }
  };

  // Default error fallback
  const DefaultErrorFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center z-10">
      <div className="text-center p-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
        <p className="text-gray-500 text-sm font-medium">Failed to load image</p>
        <p className="text-gray-400 text-xs mt-1">Please check the URL or try again</p>
      </div>
    </div>
  );

  // Calculate aspect ratio for skeleton if needed
  const getSkeletonDimensions = () => {
    const skeletonStyle = { ...defaultSkeletonProps };
    
    // If image has loaded and we have dimensions, maintain aspect ratio
    if (imageDimensions.width > 0 && imageDimensions.height > 0 && !isLoading) {
      skeletonStyle.aspectRatio = `${imageDimensions.width} / ${imageDimensions.height}`;
    }
    
    return skeletonStyle;
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      data-testid="image-with-skeleton"
      {...props}
    >
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10">
          <Skeleton 
            {...defaultSkeletonProps}
            className="absolute inset-0"
            containerClassName="absolute inset-0"
          />
        </div>
      )}
      
      {/* Error Fallback */}
      {hasError && showError && (
        errorFallback || <DefaultErrorFallback />
      )}
      
      {/* Actual Image */}
      <img 
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading || hasError ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loadingStrategy}
        decoding="async"
        {...imageProps}
      />
      
      {/* Loading spinner overlay (optional) */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;