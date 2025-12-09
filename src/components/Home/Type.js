import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Python Full-Stack Engineer",
          "Backend Architecture & Microservices Expert",
          "Cloud-Native AWS Engineer",
          "API & Distributed Systems Specialist",
          "LLM/GenAI Feature Architect",
          "Database Performance & Optimization Engineer",
          "DevOps & CI/CD Automation Lead",
          "Scalable System Design Strategist",
          "Serverless & Event-Driven Architecture Engineer",
          "Security Hardening & Compliance Advocate",
          "Cross-Functional Technical Leader",
          "Engineering Mentor & Team Enabler"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
