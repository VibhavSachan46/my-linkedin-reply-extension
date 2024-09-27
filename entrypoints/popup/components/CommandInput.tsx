import React, { useState } from 'react';

// Define the props type for CommandInput component
interface CommandInputProps {
  onGenerate: (command: string) => void;
}

const CommandInput: React.FC<CommandInputProps> = ({ onGenerate }) => {
  const [command, setCommand] = useState<string>('');

  const handleGenerate = () => {
    onGenerate(command);
  };

  return (
    <div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Type a command..."
      />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default CommandInput;
