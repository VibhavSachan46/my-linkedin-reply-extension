import React from 'react';

// Define the props type for AIIcon component
interface AIIconProps {
  showIcon: boolean;
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ showIcon, onClick }) => {
  return showIcon ? (
    <div onClick={onClick}>
      {/* Render AI Icon SVG */}
      <svg /* SVG code goes here */></svg>
    </div>
  ) : null;
};

export default AIIcon;