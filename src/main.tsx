import React from "react";
import ReactDOM from "react-dom/client";
import "styles/globals.css";
import FormPage from "pages/Form-Page";

const App = () => {
  return (
    <div className="flex h-screen w-screen">
      <FormPage />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
