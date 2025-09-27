import React, { useState } from "react";
import data from "./data";

function Accordion() {
  // State: which question is open? null means none is open
  const [openQuestionId, setOpenQuestionId] = useState(null);

  // State to show all answers or not
  const [showAll, setShowAll] = useState(false);

  function toggleQuestion(id) {
    // If "show all" is ON, ignore individual toggle
    if (showAll) return;

    // Toggle single question open/close
    if (openQuestionId === id) {
      setOpenQuestionId(null);
    } else {
      setOpenQuestionId(id);
    }
  }

  function toggleShowAll() {
    // Flip showAll ON/OFF
    setShowAll(!showAll);

    // When show all is ON, close any single open question
    if (!showAll) {
      setOpenQuestionId(null);
    }
  }

  return (
    <div style={{ width: "300px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>Simple Accordion</h1>
      
      {/* Button to Show or Hide All answers */}
      <button onClick={toggleShowAll} style={{ marginBottom: "20px" }}>
        {showAll ? "Hide All Answers" : "Show All Answers"}
      </button>
      
      {data.map((item) => (
        <div 
          key={item.id} 
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          {/* Question */}
          <div 
            onClick={() => toggleQuestion(item.id)} 
            style={{ cursor: showAll ? "default" : "pointer", fontWeight: "bold" }}
          >
            {item.question}
          </div>

          {/* Show answer if question is open or if showAll is true */}
          {(showAll || openQuestionId === item.id) && (
            <div style={{ marginTop: "10px", color: "blue" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
