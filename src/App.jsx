import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "3rem auto",
        padding: "2rem",
        borderRadius: "12px",
        background: "#f0f8ff",
        color: "#1a202c",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1.5rem",
          color: "#2b6cb0",
          textAlign: "center",
        }}
      >
        Welcome to
        <span style={{ color: "green" }}> Gr</span>
        <span style={{ color: "red" }}>ai</span>
        <span style={{ color: "green" }}>l</span>
        <span style={{ color: "blue" }}>tec</span>
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          marginBottom: "1.5rem",
        }}
      >
        Your go-to platform for{" "}
        <strong style={{ color: "#2f855a" }}>
          realistic, high-quality practice tests
        </strong>{" "}
        built to reflect the experience of competitive entrance exams in India.
        At Grailtec, we focus on offering carefully crafted mock tests and{" "}
        <strong style={{ color: "#d69e2e" }}>insightful evaluations</strong>{" "}
        that highlight your strengths and flag areas needing improvement — so
        you can fine-tune your preparation where it matters most. Whether you're
        revising or testing your readiness, our goal is to help you practice
        with purpose and gain confidence before the real exam.
      </p>
      <p
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#c53030",
          textAlign: "center",
        }}
      >
        🚀 Launching soon — stay tuned and get exam-ready with Grailtec!
      </p>
    </div>
  );
}

export default App;
