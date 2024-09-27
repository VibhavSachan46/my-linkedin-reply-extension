import { useState, useRef, useEffect } from 'react';
import AIIcon from './components/AIIcon';
import Modal from './components/Modal';
import CommandInput from './components/CommandInput';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
  const [showIcon, setShowIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState('');
  const messageInputRef = useRef<HTMLInputElement>(null);

  // Function to show/hide AI icon based on message input focus
  useEffect(() => {
    const handleFocus = () => setShowIcon(true);
    const handleBlur = () => setShowIcon(false);

    const messageInput = messageInputRef.current;
    if (messageInput) {
      messageInput.addEventListener('focus', handleFocus);
      messageInput.addEventListener('blur', handleBlur);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (messageInput) {
        messageInput.removeEventListener('focus', handleFocus);
        messageInput.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  // Function to handle the Generate button click
  const handleGenerate = () => {
    setResponse(
      'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.'
    );
  };

  // Function to insert the generated response into the message input field
  const handleInsertResponse = () => {
    if (messageInputRef.current) {
      messageInputRef.current.value = response;
    }
  };

  return (
    <div className="App">
      {/* Simulating LinkedIn message input */}
      <div className="linkedin-message-input-container">
        <input
          ref={messageInputRef}
          type="text"
          className="linkedin-message-input"
          placeholder="Type a message on LinkedIn..."
        />
      </div>

      {/* AI Icon to be shown when the input is focused */}
      <AIIcon showIcon={showIcon} onClick={() => setShowModal(true)} />

      {/* Modal for generating AI replies */}
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <CommandInput onGenerate={handleGenerate} />
        {response && (
          <ResponseDisplay response={response} onInsert={handleInsertResponse} />
        )}
      </Modal>
    </div>
  );
}

export default App;
