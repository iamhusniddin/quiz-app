import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Toaster
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <>
       <App />
       <Toaster />
    </>
);
