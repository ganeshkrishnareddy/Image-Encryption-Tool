import React, { useRef } from 'react';
import { Upload, ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void;
  image: string | null;
  title: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, image, title }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is an image
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onImageUpload(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);

    // Reset the input to allow re-uploading the same file
    e.target.value = '';
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div 
        className="p-6 flex flex-col items-center justify-center min-h-[300px]"
        style={{ backgroundImage: image ? 'none' : 'radial-gradient(circle, rgba(22,78,99,0.3) 0%, rgba(13,13,13,0) 70%)' }}
      >
        {image ? (
          <img
            src={image}
            alt="Original"
            className="max-w-full max-h-[300px] object-contain rounded"
          />
        ) : (
          <div className="text-center">
            <div className="bg-gray-700 rounded-full p-4 inline-block mb-4">
              <ImageIcon size={40} className="text-gray-400" />
            </div>
            <p className="text-gray-400 mb-2">No image selected</p>
            <p className="text-gray-500 text-sm mb-4">Supported formats: JPG, PNG, GIF</p>
          </div>
        )}
      </div>
      <div className="px-6 pb-6">
        <button
          onClick={handleUploadClick}
          className="w-full py-3 flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors text-white font-medium"
        >
          <Upload size={18} className="mr-2" />
          Upload Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploader;