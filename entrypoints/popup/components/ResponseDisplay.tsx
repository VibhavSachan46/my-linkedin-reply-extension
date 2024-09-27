import React from 'react';

// Define the props type for ResponseDisplay component
interface ResponseDisplayProps {
  response: string;
  onInsert: () => void;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, onInsert }) => {
  return (
    <div>
      <p>{response}</p>
      <button onClick={onInsert}>Insert</button>
    </div>
  );
};

export default ResponseDisplay;
