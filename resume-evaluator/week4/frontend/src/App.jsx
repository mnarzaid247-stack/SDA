import Header from './components/Header'
import EvaluatorPage from './pages/EvaluatorPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Header title="Resume Evaluator" />
      <Routes>
        <Route path="/" element={<EvaluatorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  )
}
