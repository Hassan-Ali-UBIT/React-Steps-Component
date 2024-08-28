import { useState } from "react";

const messages = [
  "Learn React in a good way ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true)
  
  function handlePrevious() {
    setSteps(c => (c > 1) ? c - 1 : 1)
  }

  function handleNext() {
    setSteps(c => (c < 3) ? c + 1 : 3)
  }
  
  return (
  <div>
    <div className="close" onClick={() => setIsOpen(!isOpen)}>&times;</div>
    {
      isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{messages[steps - 1]}</p>
          <div className="buttons">
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )
    }
    
  </div>
    
  );
}

export default App;
