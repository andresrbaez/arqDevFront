import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const Info = lazy(() => import('./pages/Info'))
const Contact = lazy(() => import('./pages/Contact'))
import { PuffLoader } from "react-spinners";
import { Toaster } from 'react-hot-toast'
import Project from './pages/Project'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<Suspense fallback={
            <div className='loader'> <PuffLoader color="#7d717177" /> </div>
          }> <HomePage /> </Suspense>} 
        />
        <Route 
          path='/projects' 
          element={<Suspense fallback={
            <div className='loader'> <PuffLoader color="#7d717177" /> </div>
          }> <ProjectsPage /> </Suspense>} 
        />
        {/* <Route 
          path='/about-me' 
          element={<Suspense fallback={
            <div className='loader'> <PuffLoader color="#7d717177" /> </div>
          }> <Info /> </Suspense>} 
        />  */}
        <Route 
          path='/contact' 
          element={<Suspense fallback={
            <div className='loader'> <PuffLoader color="#7d717177" /> </div>
          }> <Contact /> </Suspense>} 
        />
        <Route 
          path='/projects/:id' 
          element={<Suspense fallback={
            <div className='loader'> <PuffLoader color="#7d717177" /> </div>
          }> <Project /> </Suspense>} 
        />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App






// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ProjectsPage from './pages/ProjectsPage'
// import HomePage from './pages/HomePage'
// import Info from './pages/Info'
// import Contact from './pages/Contact'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<HomePage/>} />
//         <Route path='/projects' element={<ProjectsPage/>} />
//         <Route path='/information' element={<Info/>} />
//         <Route path='/contact' element={<Contact/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App