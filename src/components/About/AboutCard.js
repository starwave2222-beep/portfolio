import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Senior Python Full Stack Engineer with <b className="purple">11+ years of experience</b> designing and building large-scale, high-performance platforms using
            <b className="purple">Python, Django, FastAPI, Node.js, and React/TypeScript</b>. Expert in <b className="purple">backend architecture, microservices, REST/GraphQL APIs,
            cloud-native infrastructure (AWS/Azure), and database optimization.</b>
            Proven track record in <b className="purple">scaling complex systems, automating workflows, improving reliability and performance</b>, and leading the
            implementation of <b className="purple">LLM/GenAI-powered features</b> to enhance user engagement. Strong experience in <b className="purple">DevOps, CI/CD pipelines,
            containerization (Docker/Kubernetes), and secure enterprise systems.</b> Collaborative technical leader with a history of mentoring
            teams, driving architecture decisions, and delivering measurable business impact.
            <br />
            <br />
            <b className="purple">Experience:</b>
            <br />
            <b>Breakout EDU, Remote – Senior Full Stack Engineer (Oct 2022 – Nov 2025)</b>
            <p>At BreakoutEDU, I help build and maintain the platform that powers interactive learning experiences for educators and students.</p>
            <ul>
              <li>Solved large-scale performance and scaling challenges for interactive learning systems using Python (Django, FastAPI), React/TypeScript, and Node.js, increasing platform capacity and concurrency handling by 40%.</li>
              <li>Architected and developed high-performance RESTful APIs, GraphQL services, and microservices, reducing system latency by 35% and improving request throughput during peak usage.</li>
              <li>Built and optimized cloud-native infrastructure using AWS Lambda, ECS, S3, RDS, API Gateway, CloudFront, achieving 99.9% uptime and supporting global, low-latency delivery.</li>
              <li>Led development of LLM & GenAI-powered features using OpenAI API, LangChain, LlamaIndex, embeddings, and RAG pipelines, improving personalized learning experiences and user engagement by 25%.</li>
              <li>Strengthened platform security and compliance with OAuth2/JWT authentication, SSL/TLS encryption, IAM hardening, and SOC2-ready practices, reducing security incidents by 90%.</li>
              <li>Streamlined DevOps workflows and CI/CD pipelines using GitHub Actions, Docker, Kubernetes, IaC (Terraform/CloudFormation), cutting deployment times by 30% and improving release reliability.</li>
              <li>Collaborated closely with product, design, backend, and data teams, providing technical leadership across architecture, debugging, code reviews, and full-stack feature development.</li>

            </ul>
            <b>Topgolf, Dallas, TX  – Python Full Stack Engineer (Sep 2021 – Sep 2022)</b>
            <p>I worked as a lead developer on one of Topgolf’s largest internal systems—the Sales Reservation Management PIE platform.</p>
            <ul>
              <li>Improved the Sales Reservation Management PIE platform by resolving critical backend bottlenecks, increasing booking performance by 45%.</li>
              <li>Designed and optimized serverless APIs and microservices with Python (FastAPI/Flask) and Node.js, increasing request throughput and reducing infrastructure cost by 20%.</li>
              <li>Enhanced data performance through PostgreSQL/MySQL optimization and Redis caching, improving reservation data access speeds by 60%.</li>
              <li>Strengthened internal dashboards using React/Redux, improving frontend responsiveness and reducing load times across key workflows.</li>
              <li>Streamlined deployments with improved CI/CD pipelines (Docker, Kubernetes, GitHub Actions/Jenkins), cutting deployment friction by 35% and improving release stability.</li>
            </ul>
            <b>Experian, Greater Sacramento, CA – Senior Computer Programmer (Sep 2014 – Oct 2021)</b>
            <p>During my time at Experian, I focused on automation, system reliability, and improving internal workflows.</p>
            <ul>
              <li>Engineered end-to-end automation solutions using Python (FastAPI, Django), Node.js, and Bash, eliminating manual workflows and improving engineering productivity by 40% while reducing operational errors by 50%.</li>
              <li>Built and optimized scalable backend architectures, including RESTful APIs, GraphQL services, microservices, and eventdriven/serverless systems, increasing throughput and system reliability by 35–45%.</li>
              <li>Developed full-stack internal applications using the MERN stack (MongoDB, Express, React, Node.js) to modernize legacy tools, improving UI responsiveness and reducing workflow friction across multiple teams.</li>
              <li>Implemented high-performance caching and distributed processing with Redis, Memcached, Kafka/RabbitMQ, and advanced SQL optimization, improving API and data pipeline performance by 60%.</li>
              <li>Designed cloud-native infrastructure on AWS, utilizing Lambda, EC2, RDS, S3, API Gateway, CloudFront, IAM, and Infrastructureas-Code (Terraform/CloudFormation) to deliver secure and scalable systems.</li>
              <li>Integrated real-time monitoring & observability using Prometheus, Grafana, ELK, and AWS CloudWatch, decreasing production outages by 25% and reducing mean-time-to-recovery (MTTR) by 30%.</li>
              <li>Improved frontend performance and stability by implementing React best practices, reusable component libraries, codesplitting, caching strategies, and optimized API integration.</li>
              <li>Delivered robust CI/CD pipelines using GitHub Actions, Jenkins, and Docker/Kubernetes, enabling automated testing, artifact versioning, and zero-downtime deployments.</li>
              <li>Strengthened platform security by implementing OAuth2/JWT authentication, secrets management (AWS SSM/Vault), secure API design, and role-based access controls, ensuring compliance with enterprise requirements.</li>
              <li>Built internal dashboards, admin panels, and DevOps tooling for engineering, support, and product teams—improving operational visibility and accelerating decision-making by 20%.</li>
              <li>Acted as a senior engineering mentor, leading architectural reviews, resolving complex production issues, improving code quality through reviews, and guiding junior developers across backend, frontend, and cloud projects.</li>
            </ul>
            <b className="purple">Technical Skills:</b>
            <ul>
              <li><strong>Programming Languages:</strong> Python, JavaScript/TypeScript, Node.js, SQL, Bash</li>
              <li><strong> Backend & Architecture:</strong> Django, FastAPI, Flask, RESTful APIs, GraphQL, gRPC, Microservices Architecture, Event-Driven Architecture, Serverless APIs, Distributed Systems, Message Queues (RabbitMQ, Kafka), OAuth2 / JWT Auth, Caching (Redis, Memcached)</li>
              <li><strong>Cloud & Infrastructure:</strong> AWS (Lambda, EC2, ECS, S3, API Gateway, CloudFront), Azure Functions, Google Cloud Run, Docker, Kubernetes, Terraform, Serverless Framework, Nginx, Load Balancers, CDN Optimization</li>
              <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, ElasticSearch, SQL Optimization, Data Modeling & Normalization</li>
              <li><strong>LLM & GenAI Systems:</strong> OpenAI API, LangChain, LlamaIndex, Prompt Engineering, RAG Pipelines, Multi-Agent Systems, Fine-Tuning, Embeddings, Vector Search, Model Evaluation & Benchmarking</li>
              <li><strong>ML frameworks & Optimization:</strong> PyTorch, TensorFlow, Scikit-Learn, ONNX Runtime, Model Quantization, GPU Acceleration, Pipelines (Airflow, Prefect), Feature Engineering</li>
              <li><strong>Vector Databases:</strong> Pinecone, Weaviate, Milvus, FAISS, ChromaDB</li>
              <li><strong>Testing & QA:</strong> Pytest, Unittest, Postman/Newman, Jest, Playwright, Integration & Load Testing, API Contract Testing</li>
              <li><strong>DevOps & CI/CD:</strong> GitHub Actions, GitLab CI, Jenkins, Docker Compose, Helm, Logging & Monitoring (Prometheus, Grafana, ELK), Automated Deployments, Blue/Green & Canary Releases</li>
              <li><strong>Collaboration & Management Tools:</strong> Jira, Confluence, Slack, Notion, Agile/Scrum, Code Reviews, Technical Documentation, Architecture Diagrams</li>
              <li><strong>Security & Compliance:</strong> OWASP Top 10, Secure API Design, Identity & Access Management, Secrets Management (Vault/SSM), SSL/TLS, SOC2-ready architecture, Data Encryption (at-rest/in-transit)</li>
            </ul>
            <br />
            <b className="purple">Soft Skills:</b>
            <ul>
              <li><strong>Analytical Thinking:</strong> Skilled at evaluating complex technical problems, identifying root causes, and implementing scalable, long-term solutions.</li>
              <li><strong>Mentorship:</strong> Passionate about coaching junior developers, conducting code reviews, and fostering a culture of learning and knowledge sharing.</li>
              <li><strong>Collaboration:</strong> Excellent team player experienced in Agile and cross-functional collaboration with designers, PMs, and QA teams.</li>
              <li><strong>Ownership:</strong> Takes full accountability for project lifecycles — from planning and architecture to deployment and maintenance.</li>
              <li><strong>Problem Solving:</strong> Expert at diagnosing bottlenecks and optimizing both performance and developer workflows for efficiency.</li>
              <li><strong>Adaptability:</strong> Quickly learns and applies new technologies, frameworks, and methodologies in fast-paced, evolving environments.</li>
              <li><strong>Communication:</strong> Clear, concise communicator able to bridge technical and business goals effectively.</li>
              <li><strong>Leadership:</strong> Leads with empathy and technical excellence, ensuring quality, teamwork, and innovation across development teams.</li>
            </ul>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Tulay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
