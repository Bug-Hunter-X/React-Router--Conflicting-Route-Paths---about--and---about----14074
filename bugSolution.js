```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Correct route order, wildcard routes should be last */}
        <Route path="/about" element={<About />} />
        <Route path="/about/*" element={<AboutDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About Page</div>;
}

function AboutDetails(){
  return <div>About Details</div>;
}
export default App;
```