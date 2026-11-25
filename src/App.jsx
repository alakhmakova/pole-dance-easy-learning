import { Routes, Route } from "react-router";
import Layout from './components/Layout';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import ElementPage from './pages/ElementPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="element/:id" element={<ElementPage />} />
      </Route>
    </Routes>
  )
}

export default App
