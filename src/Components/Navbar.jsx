// const name = "Rimhjim "
// const name = () =>{
//       <>
//             <p>Hello</p>
//       </>
// }
// export default name
import React from 'react'

const Navbar = () => {
  return (
      <>
    <div className="container">
      <div className="logo">
            <h2>Navbar</h2>
      </div>
      <ul className='list'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar