// components/ImageZoomModal.tsx
import React, { useState } from 'react';

interface ImageZoomModalProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ src, alt, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);  // Modal open state
  const [isZoomed, setIsZoomed] = useState(false);  // Zoom state

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
    setIsZoomed(false);  // Reset zoom when modal is opened
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setIsZoomed(false);  // Reset zoom when modal is closed
  };

  // Toggle zoom when image inside modal is clicked
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      {/* Display image thumbnail */}
      <img 
        src={src} 
        alt={alt} 
        width={width || 300} 
        height={height || 300} 
        className="cursor-pointer rounded-lg" 
        onClick={openModal} 
      />

      {/* Modal for fullscreen image */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close modal when clicking outside
        >
          {/* Prevent modal close when clicking on the image itself */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              <img src='/close.svg' alt='close' />
            </button>

            <img 
              src={src} 
              alt={alt} 
              className={`mx-auto transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'} max-h-screen`}
              onClick={toggleZoom}  // Toggle zoom on image click
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoomModal;


