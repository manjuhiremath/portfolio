
import './TechStack.css'; // Import the CSS file

function InfiniteScroll() {
  return (
    <div className="container">
      <div className="scroll" style={{ '--time': '30s' }}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Java</span>
          <span>Python</span>
          <span>My Sql</span>
          <span>Node JS</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Java</span>
          <span>Python</span>
          <span>My Sql</span>
          <span>Node JS</span>
        </div>
      </div>
      {/* Add other scroll elements with different styles */}
    </div>
  );
}

export default InfiniteScroll;
