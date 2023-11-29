import Form from './Form'
// import { useState, useEffect } from 'react'
// import { IoInvertMode } from "react-icons/io5";

// function getModeFromLocalStorage() {
//   return localStorage.getItem('theme') || 'light'
// }

// const themes = {
//   light: 'light',
//   dark: 'dark',
// }

function Navbar() {

  
//   const [theme, setTheme] = useState(getModeFromLocalStorage())

//   const handleTheme = () => {
//     setTheme((prev) => {
//       return prev === 'dark' ? 'light' : 'dark'
//     })
//   }

//   useEffect(() => {
//     if (theme === 'light') {
//         document.body.classList.remove('dark')
//     } else {
//         document.body.classList.add('dark')
//     }
//     localStorage.setItem('theme', theme)
// }, [theme])


  return (
    <nav className="header">
      <div className="container flex items-center justify-between py-5 relative">
        <h2 className="header-title text-2xl text-white font-bold">Cooking</h2>
        <button className="btn btn-info" onClick={() => document.getElementById('my_modal_3').showModal()}>Create Recipe +</button>
        <Form />
        {/* <button className='absolute top-1 right-1'><IoInvertMode /></button> */}
      </div>

    </nav>
  )
}

export default Navbar