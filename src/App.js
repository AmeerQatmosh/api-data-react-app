import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import useFetch from "./components/useFatch";

import githubLogo from "./github-logo.png";

const App = () => {
  const [data] = useFetch("https://api.github.com/users");

  return (
    <>
      <header className="header">
        <img className="header-logo" src={githubLogo} alt="GitHub Logo" />
        <h1 className="header-title">GitHub Users</h1>
      </header>
      <div className="card-container">
        {data &&
          data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img
                  className="avatar"
                  src={item.avatar_url}
                  alt={`Avatar for ${item.login}`}
                />
                <p className="login">{item.login}</p>
                <a
                  className="profile-link"
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            );
          })}
      </div>
      <footer className="footer">
        <p className="footer-text">© 2023 Your Website. All rights reserved.</p>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
