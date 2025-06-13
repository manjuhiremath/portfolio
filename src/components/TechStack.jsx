import './TechStack.css';

function TechStack() {
  const techItems = [
    "HTML", "CSS", "JavaScript", "ReactJS", 
    "Java", "NextJs", "MySQL", "NodeJS",
    "TypeScript", "Tailwind CSS", "MongoDB", "ExpressJS",
     "Material UI",
  ];

  return (
    <div className="tech-grid-container">
      <div className="tech-grid flex flex-wrap justify-center items-center">
        {techItems.map((tech, index) => (
          <div key={index} className="tech-grid-item">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;