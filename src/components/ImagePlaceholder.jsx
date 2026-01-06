const ImagePlaceholder = ({ type, className = '' }) => {
  const getPlaceholder = () => {
    switch(type) {
      case 'pos-device':
        return (
          <div className={`bg-gradient-to-br from-purple-100 to-purple-50 ${className}`}>
            <div className="relative w-full h-64 flex items-center justify-center">
              <div className="w-48 h-32 bg-white rounded-xl border-4 border-purple-200 shadow-lg">
                <div className="absolute top-4 left-4 w-16 h-4 bg-purple-300 rounded"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-purple-400 rounded-lg"></div>
              </div>
            </div>
          </div>
        );
      case 'transaction':
        return (
          <div className={`bg-gradient-to-br from-blue-100 to-blue-50 ${className}`}>
            <div className="relative w-full h-64 flex items-center justify-center">
              <div className="w-56 h-40 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-16 h-6 bg-blue-300 rounded"></div>
                  <div className="w-12 h-6 bg-green-400 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                  <div className="w-1/2 h-4 bg-blue-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'team':
        return (
          <div className={`bg-gradient-to-br from-gray-100 to-gray-50 ${className}`}>
            <div className="relative w-full h-64 flex items-center justify-center">
              <div className="flex space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-20 h-20 bg-white rounded-full border-4 border-purple-200 shadow-lg"></div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className={`bg-gradient-to-br from-gray-100 to-gray-50 ${className}`}>
            <div className="w-full h-64 flex items-center justify-center">
              <div className="text-gray-400">
                <div className="text-4xl">📱</div>
                <p className="mt-2 text-sm">Image Placeholder</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return getPlaceholder();
};

export default ImagePlaceholder;