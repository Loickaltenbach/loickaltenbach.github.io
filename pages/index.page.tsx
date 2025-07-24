import React from 'react';
import '../src/index.css';
import App from '../src/App.jsx';

export default {
  Page: () => (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  // Optionally, add SEO props:
  documentProps: {
    title: "Loïc Kaltenbach - Full Stack Developer | React, Django Expert",
    description: "Experienced Full Stack Developer specializing in React, Django, and mobile/web apps. Based in France, currently at Actimage GmbH. Open to new opportunities."
  }
};
