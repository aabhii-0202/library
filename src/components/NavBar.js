import React from 'react'
import style from './NavBar.css';
function LibraryItem() {
  return (
    <>
        <nav className="navbar">
            <div className="heading">
                <h1 className={style.heading}>Library Management System</h1>
            </div>
        </nav>
    </>
  )
}

export default LibraryItem