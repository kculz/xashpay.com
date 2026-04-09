import { AlertCircle, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import PillBadge from '../components/ui/PillBadge';

export default function NotFound() {
  return (
    <div className="pt-20 min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <PillBadge variant="gold" className="text-sm font-semibold">
            Error 404
          </PillBadge>
        </div>
        
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-[#0B3C5D]">
            <AlertCircle size={48} />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0B3C5D]">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Link to="/" className="w-full sm:w-auto">
            <Button className="w-full text-lg items-center justify-center gap-2 bg-[#0B3C5D] text-white hover:bg-[#082a42]">
              <Home size={20} />
              Back to Home
            </Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <Button variant="outline" className="w-full text-lg items-center justify-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50">
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}
