import {Routes, Route} from 'react-router-dom';
import ProductCardHolder from './components/ProductCardHolder';
import ProductPage from "./components/ProductPage"

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductCardHolder />}/>
      <Route path='/products/:id' element={<ProductPage />}/>
    </Routes>
  );
}

export default App;
