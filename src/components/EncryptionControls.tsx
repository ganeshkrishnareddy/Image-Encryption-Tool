import React from 'react';
import { Lock, Unlock, RefreshCw, Sliders } from 'lucide-react';

interface EncryptionControlsProps {
  encryptionMethod: string;
  setEncryptionMethod: (method: string) => void;
  isEncrypted: boolean;
  isProcessing: boolean;
  processImage: () => void;
  disabled: boolean;
  encryptionKey: number;
  setEncryptionKey: (key: number) => void;
}

const EncryptionControls: React.FC<EncryptionControlsProps> = ({
  encryptionMethod,
  setEncryptionMethod,
  isEncrypted,
  isProcessing,
  processImage,
  disabled,
  encryptionKey,
  setEncryptionKey,
}) => {
  const encryptionMethods = [
    { id: 'swap', name: 'Pixel Swap', description: 'Swaps adjacent pixels' },
    { id: 'xor', name: 'XOR Operation', description: 'Applies XOR with a key value', useKey: true },
    { id: 'invert', name: 'Color Inversion', description: 'Inverts all color values' },
    { id: 'shift', name: 'Pixel Shift', description: 'Shifts pixel values by key amount', useKey: true },
  ];

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8">
      <div className="p-4 border-b border-gray-700 flex items-center">
        <Sliders size={20} className="text-cyan-400 mr-2" />
        <h2 className="text-xl font-semibold text-white">Encryption Controls</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Encryption Method:</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {encryptionMethods.map((method) => (
              <div
                key={method.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  encryptionMethod === method.id
                    ? 'bg-gray-700 border-cyan-500 text-white'
                    : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
                onClick={() => setEncryptionMethod(method.id)}
              >
                <div className="font-medium mb-1">{method.name}</div>
                <div className="text-sm text-gray-400">{method.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {encryptionMethods.find(m => m.id === encryptionMethod)?.useKey && (
          <div className="mb-6">
            <label htmlFor="key-input" className="block text-gray-300 mb-2 font-medium">Encryption Key (0-255):</label>
            <div className="flex items-center">
              <input
                id="key-input"
                type="range"
                min="0"
                max="255"
                value={encryptionKey}
                onChange={(e) => setEncryptionKey(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <span className="ml-3 min-w-[40px] text-center text-gray-300">{encryptionKey}</span>
            </div>
          </div>
        )}
        
        <button
          onClick={processImage}
          disabled={disabled || isProcessing}
          className="w-full py-3 px-4 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-500 rounded-lg transition-all text-white font-medium shadow-lg hover:shadow-xl disabled:shadow-none"
        >
          {isProcessing ? (
            <>
              <RefreshCw size={18} className="mr-2 animate-spin" />
              Processing...
            </>
          ) : isEncrypted ? (
            <>
              <Unlock size={18} className="mr-2" />
              Decrypt Image
            </>
          ) : (
            <>
              <Lock size={18} className="mr-2" />
              Encrypt Image
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default EncryptionControls;