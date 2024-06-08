import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPost from './components/DetailPost/DetailPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contactform" element={<ContactForm />}></Route>
        <Route path="/posts/:id" element={<DetailPost />}></Route>
      </Routes>
      
    </Router>

  );
}

export default App;

