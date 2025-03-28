
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Marquee = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-aquilonis-orange text-white py-1.5 overflow-hidden relative z-50">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <div className="flex items-center mx-auto">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">
            This site is currently under development — Some features may not be fully functional at this time.
          </span>
          <span className="mx-6">•</span>
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">
            This site is currently under development — Some features may not be fully functional at this time.
          </span>
          <span className="mx-6">•</span>
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">
            This site is currently under development — Some features may not be fully functional at this time.
          </span>
          <span className="mx-6">•</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
