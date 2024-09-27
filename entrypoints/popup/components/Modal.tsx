import React from 'react';

interface ModalProps {
  onClose: () => void;
  onGenerate: () => void;
  onInsert: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onGenerate, onInsert }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Generate Reply</h2>
        <input 
          type="text" 
          placeholder="Enter your command..." 
          className="border p-2 w-full mt-2" 
        />
        <div className="mt-4">
          <button onClick={onGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">Generate</button>
          <button onClick={onInsert} className="bg-green-500 text-white px-4 py-2 rounded ml-2">Insert</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
