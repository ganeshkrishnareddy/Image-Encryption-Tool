import React, { useState, useRef } from 'react';
import { Upload, Download, RefreshCw, Info } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import EncryptionControls from '../components/EncryptionControls';
import InfoCard from '../components/InfoCard';

const Home: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [encryptionMethod, setEncryptionMethod] = useState<string>('swap');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [key, setKey] = useState<number>(10); // Default encryption key
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (imageDataUrl: string) => {
    setOriginalImage(imageDataUrl);
    setProcessedImage(null);
    setIsEncrypted(false);
  };

  const processImage = () => {
    if (!originalImage) return;
    
    setIsProcessing(true);
    
    // Small delay to allow processing indicator to show
    setTimeout(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      if (!canvas || !ctx) {
        setIsProcessing(false);
        return;
      }
      
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Apply selected encryption/decryption method
        if (encryptionMethod === 'swap') {
          // Swap adjacent pixels
          for (let i = 0; i < data.length; i += 4) {
            if (i + 4 < data.length) {
              // Swap R values
              const temp = data[i];
              data[i] = data[i + 4];
              data[i + 4] = temp;
              
              // Swap G values
              const tempG = data[i + 1];
              data[i + 1] = data[i + 5];
              data[i + 5] = tempG;
              
              // Swap B values
              const tempB = data[i + 2];
              data[i + 2] = data[i + 6];
              data[i + 6] = tempB;
            }
          }
        } else if (encryptionMethod === 'xor') {
          // XOR operation with key
          for (let i = 0; i < data.length; i += 4) {
            data[i] = data[i] ^ key; // R
            data[i + 1] = data[i + 1] ^ key; // G
            data[i + 2] = data[i + 2] ^ key; // B
            // Alpha channel remains unchanged
          }
        } else if (encryptionMethod === 'invert') {
          // Invert colors
          for (let i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i]; // R
            data[i + 1] = 255 - data[i + 1]; // G
            data[i + 2] = 255 - data[i + 2]; // B
            // Alpha channel remains unchanged
          }
        } else if (encryptionMethod === 'shift') {
          // Shift pixel values
          for (let i = 0; i < data.length; i += 4) {
            data[i] = (data[i] + key) % 256; // R
            data[i + 1] = (data[i + 1] + key) % 256; // G
            data[i + 2] = (data[i + 2] + key) % 256; // B
            // Alpha channel remains unchanged
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
        setProcessedImage(canvas.toDataURL());
        setIsEncrypted(!isEncrypted);
        setIsProcessing(false);
      };
      
      img.src = isEncrypted ? processedImage! : originalImage;
    }, 200);
  };

  const downloadImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `encrypted_image_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleInfoCard = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          Image Encryption Tool
        </h1>
        <p className="text-gray-400 text-center max-w-2xl">
          Secure your images using pixel manipulation techniques. Upload an image, apply encryption,
          and download the encrypted result.
        </p>
      </div>

      <div className="relative mb-8">
        <button
          onClick={toggleInfoCard}
          className="absolute right-4 top-4 p-2 bg-gray-800 rounded-full text-cyan-400 hover:bg-gray-700 z-10 transition-colors"
          aria-label="Show information"
        >
          <Info size={20} />
        </button>
        
        {showInfo && (
          <InfoCard onClose={toggleInfoCard} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ImageUploader onImageUpload={handleImageUpload} image={originalImage} title="Original Image" />
        
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Processed Image</h2>
          </div>
          <div className="p-6 flex flex-col items-center justify-center min-h-[300px]">
            {processedImage ? (
              <img
                src={processedImage}
                alt="Processed"
                className="max-w-full max-h-[300px] object-contain rounded"
              />
            ) : (
              <div className="text-gray-500 text-center">
                {originalImage ? 'Click process to encrypt/decrypt' : 'Upload an image first'}
              </div>
            )}
          </div>
          <div className="px-6 pb-6">
            <button
              onClick={downloadImage}
              disabled={!processedImage}
              className="w-full py-3 flex items-center justify-center bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 rounded-lg transition-colors text-white font-medium"
            >
              <Download size={18} className="mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      <EncryptionControls
        encryptionMethod={encryptionMethod}
        setEncryptionMethod={setEncryptionMethod}
        isEncrypted={isEncrypted}
        isProcessing={isProcessing}
        processImage={processImage}
        disabled={!originalImage}
        encryptionKey={key}
        setEncryptionKey={setKey}
      />

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default Home;