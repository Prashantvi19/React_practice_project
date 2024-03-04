import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Success from './Success';
import Login from './Login';
import Success_login from './Success_login';
import Home from './Home';
import About from './About';
import ContactList from './contactList';
import ContactUpdate from './ContactUpdate';
import { Profile } from './Profile'
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success/login" element={<Success_login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact/list" element={<ContactList />} />
        <Route path="/contact/update" element={<ContactUpdate contactId={'134'} />} />
        {/* <Route path="/more" element={<ProfileMore /> } /> */} 134
      </Routes>
      <Footer ></Footer>
    </BrowserRouter>
  );
}

export default App;
