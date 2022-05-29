import { Favorite, Home, NotFound } from 'pages';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import 'styles/layout.scss'

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <div className='wraper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
