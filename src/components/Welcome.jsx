// import React from 'react';
// import './Welcome.css';

// function Welcome() {
//   return (
//     <div className="welcome-container">
//       <div className="welcome-text-container">
//         <h1 className="welcome-heading">Welcome to My Code Sand Editor!</h1>
//         <p className="welcome-text">Thanks for stopping by. We provide a place where you can design your webpage using HTML, CSS, and JavaScript.</p>
//         <button className="welcome-button">Get Started</button>
//       </div>
//       <div className="welcome-image-container">
//         <img className="welcome-image" src="/images/welcome-image.jpg" alt="Welcome" />
//       </div>
//     </div>
//   );
// }

// export default Welcome;
import React, { useState } from 'react';
import './Welcome.css';
import Code from './Code';

function Welcome() {
  const [showCode, setShowCode] = useState(false);

  const handleClick = () => {
    setShowCode(true);
  }

  if (showCode) {
    return <Code />;
  }

  return (
    <div className="welcome-container">
      <div className="welcome-text-container">
        <h1 className="welcome-heading">Welcome to My Code Sand Editor!</h1>
        <p className="welcome-text">Thanks for stopping by. We provide a place where you can design your webpage using HTML, CSS, and JavaScript.</p>
        <button className="welcome-button" onClick={handleClick}>Get Started</button>
      </div>
      <div className="welcome-image-container">
        {/* <img className="welcome-image" src="/images/welcome-image.jpg" alt="Welcome" /> */}
      </div>
    </div>
  );
}
export default Welcome;

