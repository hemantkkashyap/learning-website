import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = () => {
  const [output, setOutput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalDetails, setModalDetails] = useState('');

  const handleEditorChange = (value) => {
    console.log(value);  // Handle code changes here
  };

  const openModal = (message, details) => {
    setModalMessage(message);
    setModalDetails(details);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const runCode = () => {
    // Simulate code execution
    const simulatedOutput = "10"; // Example of simulated output from user's code
    const expectedOutput = "10";

    if (simulatedOutput === expectedOutput) {
      setOutput(simulatedOutput);
      openModal("Success", "Test case passed!");
    } else {
      setOutput(simulatedOutput);
      openModal("Test case failed", "Expected output: 10. Your output: " + simulatedOutput);
    }
  };

  const submitCode = () => {
    // Simulate submission and test case checking
    const testCases = [
      { input: "[1, 2, 3, 4]", expectedOutput: "10" },
      { input: "[5, 5, 5, 5]", expectedOutput: "20" }
    ];

    let failedCases = 0;
    for (const testCase of testCases) {
      const simulatedOutput = "10"; // Example output for all test cases
      if (simulatedOutput !== testCase.expectedOutput) {
        failedCases += 1;
      }
    }

    if (failedCases === 0) {
      openModal("All test cases passed!", "Congratulations! All test cases passed successfully.");
    } else {
      openModal("Submission Failed", `${failedCases} test case(s) failed. Better luck next time!`);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side: Question */}
      <div className="w-1/2 p-4 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Problem Title</h1>
        <p className="text-lg mb-6">
          Here is the problem description. You can include the problem's prompt, examples, 
          and any additional information.
        </p>
        <h2 className="text-xl font-medium mb-2">Example:</h2>
        <pre className="bg-gray-200 p-2 rounded-lg">
          Input: [1, 2, 3, 4] {"\n"}
          Output: 10
        </pre>
      </div>

      {/* Right side: Code Editor */}
      <div className="w-1/2 p-4 bg-gray-900 text-white flex flex-col">
        <Editor
          height="70%"
          defaultLanguage="javascript"  // You can change this to the desired language like 'cpp', 'python', etc.
          defaultValue="// Write your code here..."
          theme="vs-dark"
          options={{
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: "line",
            automaticLayout: true,
          }}
          onChange={handleEditorChange}
        />

        {/* Buttons */}
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={runCode}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Run
          </button>
          <button
            onClick={submitCode}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Modal for showing the run/submit result */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg text-center w-1/3">
      <h2 className="text-2xl font-bold mb-4">
        {modalMessage === "Success" ? "✅ Success!" : "❌ Test case failed"}
      </h2>
      <p className="text-lg mb-6">
        {modalDetails}
      </p>
      <button
        onClick={closeModal}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-md"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default CodeEditor;
