import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const MapSection = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const coordinates = { lat: -18.97244, lng: 32.66996 };

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([coordinates.lat, coordinates.lng], 18);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add custom marker
    const customIcon = L.divIcon({
      html: `
        <div class="relative">
          <div class="w-12 h-12 bg-[#1F6AE1] rounded-full border-4 border-white shadow-xl animate-pulse flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
          </div>
          <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <span class="text-sm font-bold text-[#0B3C5D]">Xash Technologies</span>
          </div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [48, 60],
      iconAnchor: [24, 48],
    });

    // Add marker
    markerRef.current = L.marker([coordinates.lat, coordinates.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="p-2">
          <strong class="text-[#0B3C5D]">Xash Technologies</strong><br>
          <span class="text-gray-600">63 Embassy Building</span><br>
          <span class="text-gray-600">Mutare, Zimbabwe</span><br>
          <span class="text-xs text-gray-500">${coordinates.lat}°, ${coordinates.lng}°</span>
        </div>
      `);

    // Add zoom control
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    // Add scale control
    L.control.scale({
      imperial: false,
      metric: true
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(`${coordinates.lat}, ${coordinates.lng}`);
    alert('Coordinates copied to clipboard!');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Find Us on the Map</h2>
          <p className="text-gray-600 text-lg">Located in the heart of Mutare</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl shadow-2xl overflow-hidden border border-gray-200"
        >
          <div className="bg-[#F5F7FA] p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Compass className="text-[#1F6AE1] mr-2" size={18} />
                  <span className="text-sm text-gray-700">Leaflet Map</span>
                </div>
                <div className="hidden md:flex items-center">
                  <div className="w-2 h-2 bg-[#1F6AE1] rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Real-time location</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyCoordinates}
                  className="text-xs bg-white hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-lg transition-colors border border-gray-300"
                >
                  Copy Coordinates
                </button>
              </div>
            </div>
          </div>
          
          {/* Leaflet Map Container */}
          <div 
            ref={mapRef} 
            className="h-96 w-full relative"
            style={{ 
              minHeight: '384px',
              zIndex: 1
            }}
          >
            {/* Loading overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] to-gray-100 flex items-center justify-center z-0">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F6AE1] mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading map...</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F7FA] p-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4 border border-gray-200">
                  <MapPin className="text-[#1F6AE1]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A]">Xash Technologies</h3>
                  <p className="text-gray-600 text-sm">63 Embassy Building, Mutare, Zimbabwe</p>
                  <p className="text-gray-500 text-xs mt-1">
                    <span className="font-mono">18°58'20.8"S</span>,{' '}
                    <span className="font-mono">32°40'11.9"E</span>
                  </p>
                </div>
              </div>
              
              <motion.button
                onClick={handleGetDirections}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#1F6AE1' }}
                className="flex items-center text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:bg-[#0B3C5D]"
              >
                <Navigation className="mr-2" size={20} />
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Map Controls Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div 
                style={{ backgroundColor: '#F5F7FA' }}
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
              >
                <Compass className="text-[#1F6AE1]" size={20} />
              </div>
              <h4 className="font-bold text-[#1A1A1A]">Interactive Map</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use mouse or touch to pan and zoom. Click on the marker for more details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div 
                style={{ backgroundColor: '#F5F7FA' }}
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
              >
                <Navigation className="text-[#1F6AE1]" size={20} />
              </div>
              <h4 className="font-bold text-[#1A1A1A]">Get Directions</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Click "Get Directions" to open Google Maps with turn-by-turn navigation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div 
                style={{ backgroundColor: '#F5F7FA' }}
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
              >
                <MapPin className="text-[#1F6AE1]" size={20} />
              </div>
              <h4 className="font-bold text-[#1A1A1A]">Precise Location</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Exact coordinates: <code className="text-xs bg-[#F5F7FA] px-2 py-1 rounded">-18.97244, 32.66996</code>
            </p>
          </div>
        </motion.div>

        {/* Additional Map Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-[#0B3C5D] to-[#1A1A1A] rounded-2xl p-8 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="mr-3 flex-shrink-0" size={20} />
                  <span>63 Embassy Building, Mutare</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Monday to Friday: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
              <p className="text-sm text-white/80 mb-2">GPS Coordinates for Navigation:</p>
              <div className="bg-white/20 p-3 rounded-lg">
                <code className="text-lg font-mono text-white">
                  {coordinates.lat.toFixed(5)}°, {coordinates.lng.toFixed(5)}°
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leaflet CSS */}
      <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 8px !important;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .leaflet-control-zoom a {
          border-radius: 0 !important;
          border: none !important;
          background: white !important;
          color: #1F6AE1 !important;
          font-weight: bold;
        }
        .leaflet-control-zoom a:hover {
          background: #F5F7FA !important;
        }
        .leaflet-control-scale {
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 4px;
          padding: 2px 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .leaflet-popup-content {
          margin: 12px !important;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </section>
  );
};

export default MapSection;