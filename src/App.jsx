import React from 'react'
import Home from './component/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './component/Details'
import Create from './component/Create'
import Edit from './component/Edit'

const App = () => {
  const {search, pathname} = useLocation();
  return (
    <div className='h-screen w-screen  flex'>
      {(pathname != '/' || search.length>0) && (
      <Link to="/" className='absolute left-[18%] text-blue-400 font-semibold text-xl top-[3%]'>Home</Link>
    )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>

      


    </div>
  )
}

export default App