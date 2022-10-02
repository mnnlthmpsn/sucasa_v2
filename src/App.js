import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/loader'

const FourBedroom = React.lazy(() => import('./features/four_bd'))
const FourBedroomExtended = React.lazy(() => import('./features/four_bd_ext'))
const ThreeBedroom = React.lazy(() => import('./features/three_bd'))
const ThreeBedroomExtended = React.lazy(() => import('./features/three_bd_ext'))
const TwoBedroom = React.lazy(() => import('./features/two_bd'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<FourBedroom />} />
        <Route path='/four-extended' element={<FourBedroomExtended />} />
        <Route path='/three' element={<ThreeBedroom />} />
        <Route path='/three-extended' element={<ThreeBedroomExtended />} />
        <Route path='/two' element={<TwoBedroom />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
