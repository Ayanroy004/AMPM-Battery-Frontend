const { hostname } = window.location;

const baseUrl = (hostname === 'localhost' || hostname === '127.0.0.1') 
    // ? "http://localhost:5000" 
    // : "https://api.ampmenergy.com.au";
    ? "https://ampm-battery-backend.onrender.com"
    : "https://ampm-battery-backend.onrender.com";

export default baseUrl;