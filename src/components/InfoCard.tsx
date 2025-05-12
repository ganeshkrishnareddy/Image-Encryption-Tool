import React from 'react';
import { X, Shield, Key, Shuffle, RefreshCw, Wand2 } from 'lucide-react';

interface InfoCardProps {
  onClose: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ onClose }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden animate-fadeIn">
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="text-cyan-400 mr-2" size={20} />
          <h3 className="text-xl font-semibold text-white">How It Works</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center text-lg font-medium text-cyan-400 mb-2">
              <Shuffle className="mr-2" size={18} />
              Pixel Swap Encryption
            </h4>
            <p className="text-gray-300">
              This method works by swapping adjacent pixels in the image. The algorithm exchanges the RGB values of 
              neighboring pixels, which disrupts the visual representation while maintaining all original data.
              This is completely reversible by applying the same operation again.
            </p>
          </div>
          
          <div>
            <h4 className="flex items-center text-lg font-medium text-cyan-400 mb-2">
              <Key className="mr-2" size={18} />
              XOR Operation
            </h4>
            <p className="text-gray-300">
              XOR encryption applies the bitwise XOR operation to each pixel's RGB values using your specified key.
              The beauty of XOR is that applying it twice with the same key returns the original value, making it
              perfect for both encryption and decryption.
            </p>
          </div>
          
          <div>
            <h4 className="flex items-center text-lg font-medium text-cyan-400 mb-2">
              <RefreshCw className="mr-2" size={18} />
              Color Inversion
            </h4>
            <p className="text-gray-300">
              This method inverts each pixel by subtracting its RGB values from 255. The result is a negative-like
              image where dark areas become light and colors are reversed. Like other methods, this is perfectly reversible.
            </p>
          </div>
          
          <div>
            <h4 className="flex items-center text-lg font-medium text-cyan-400 mb-2">
              <Wand2 className="mr-2" size={18} />
              Pixel Shift
            </h4>
            <p className="text-gray-300">
              Pixel Shift adds your key value to each pixel's RGB components, with a modulo operation to keep values
              in the valid 0-255 range. To decrypt, the application performs the same operation, which (thanks to the
              modulo wrapping) returns to the original values.
            </p>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">
            <strong className="text-cyan-400">Security Note:</strong> While these methods effectively obscure images,
            they are not cryptographically secure for highly sensitive data. For educational and personal use only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;