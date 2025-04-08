import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; // Import CSS file

// Home Component
const Home = () => <h2 className="heading">Welcome to the React App</h2>;

// About Component
const About = () => <h2 className="heading">About Us</h2>;

// Contact Component with Form and State
const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${name}. Your message: "${message}" has been received.`);
        setName("");
        setMessage("");
        inputRef.current.focus();
    };

    return (
        <div className="contact-container">
            <h2 className="heading">Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input 
                    ref={inputRef} 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="input-field"
                />
                <br />
                <textarea 
                    placeholder="Your Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    className="textarea-field"
                />
                <br />
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

// Navbar Component using Links
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
    );
};

// App Component implementing Router, Routes, and Keys
const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
