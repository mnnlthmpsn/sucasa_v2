import React from 'react'
import { Routes, Route } from 'react-router-dom'

const LandingPage = React.lazy(() => import('./features/landing'))

const App = () => {
  return (
    <React.Suspense fallback={<p>...loading</p>}>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
