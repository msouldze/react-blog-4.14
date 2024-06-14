import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import '../assets/styles/Header.css'

export default function HeaderLayout() {
  const [isLogged, setIsLogged] =useState(true);

  const handleSelect = () => {
    setIsLogged(false)
  }

  return (
    <>
      <header className='blog-header'>
        <NavLink to='/'>Realworld Blog</NavLink>
        {
          !isLogged ?  
          <nav className='sign-navbar'>
            <NavLink to='signin'>Sing in</NavLink>
            <NavLink to='signup'>Sing up</NavLink>
          </nav> : 
          <nav className='login-navbar'>
            <NavLink to='new-article'>
              <div className='create'>
                <div>Create article</div>
                <img src="/create.svg" alt="create-icon" />
              </div>
            </NavLink>
            <NavLink to='edit-profile'>
              <div className='author'>
                  <div className='author-name'>John Doe</div>
                  <img src="/Rectangle 1.png" alt="Author Profile Picture" />
              </div>
            </NavLink>
            <NavLink to='/' onClick={handleSelect}>
              <div className='logout'>
                <div>Log Out</div>
                <img src="/logout.svg" alt="logout-icon" />
              </div>
            </NavLink>
          </nav>
        }
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}