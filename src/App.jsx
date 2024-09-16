import { useState } from "react";
import "./styles/reset.css";
import "./App.css";
import faqsData from "../src/assets/faqs.json";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <header></header>
      <main className="container">
        <div className="accordion-card">
          <div className="head">
            <img
              src="/images/icon-star.svg"
              alt="Star icon decorative"
            />
            <h1>FAQs</h1>
          </div>
          <div className="questions-container">
            {faqsData.map((faq, index) => (
              <div key={index}>
                <div
                  className="question"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2>{faq.question}</h2>
                  <img
                    src={
                      activeIndex === index
                        ? "/images/icon-minus.svg"
                        : "/images/icon-plus.svg"
                    }
                    alt={activeIndex === index ? "Question close" : "Question open"}
                  />
                </div>
                {activeIndex === index && (
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

