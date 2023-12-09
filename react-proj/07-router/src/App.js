import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import PhotosPage from './pages/PhotosPage';


function App() {
  return (
    <BrowserRouter>
      {/* Routes, Route 감싸야 함. */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/photos" element={<PhotosPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
