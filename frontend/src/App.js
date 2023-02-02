import { Route, Routes } from "react-router-dom"
import { DarkModeProvider } from './components/DarkModeProvider';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <DarkModeProvider>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    </Routes>
    </DarkModeProvider>
  );
}

export default App;
