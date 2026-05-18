import Header from './components/Header'
import EvaluatorPage from './pages/EvaluatorPage'
// TODO Day 4: import Routes, Route from react-router-dom
//             import LoginPage and RegisterPage
//             add route definitions

export default function App() {
  return (
    <div>
      <Header title="Resume Evaluator"/>
      <EvaluatorPage/>
    </div>
  )
}
