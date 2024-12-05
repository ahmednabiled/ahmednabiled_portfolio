import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Home } from './pages/Home';
import { Notes } from './pages/Notes';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;