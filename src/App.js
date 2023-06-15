import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>

    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        
      <Footer />
    </BrowserRouter>

  </>
  );
}

export default App;
