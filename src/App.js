import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import DetailUser from './components/DetailUser';
import ListProduits from './components/ListProduits';
import ListUser from './components/ListUser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Acceuil />} >
          <Route index element={<ListUser />} />
          <Route path='detailuser/:id' element={<DetailUser />} />
          <Route path='listproduits/:id' element={<ListProduits />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
