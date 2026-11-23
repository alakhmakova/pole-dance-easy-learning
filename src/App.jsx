import { Routes, Route } from "react-router";
import Layout from './components/Layout'
import CatalogPage from './pages/CatalogPage'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
      </Route>
    </Routes>
  )
}

export default App
