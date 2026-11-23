import { Routes, Route } from "react-router";
import Header from './components/Header'
import CatalogPage from './pages/CatalogPage'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<CatalogPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
      </Routes>
    </>
  )
}

export default App
