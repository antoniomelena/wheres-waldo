import React from "react";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCiXgXcJKJyejVbHcNS_KplZe4zPXnNHq4",
  authDomain: "shop-afa0b.firebaseapp.com",
  projectId: "shop-afa0b",
  storageBucket: "shop-afa0b.appspot.com",
  messagingSenderId: "72311104395",
  appId: "1:72311104395:web:983bf38d2f6934f020058e",
  measurementId: "G-ES6EG3JC90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
    </div>
  );
}

export default App;
