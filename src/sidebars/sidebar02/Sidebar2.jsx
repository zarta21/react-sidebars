import React, { useState } from 'react'
import './styles.scss'

const menuItems = [
    "Your Work", "Activity", "Assets", "Pinned Items", "Following", "Trending", "Challenges", "Spark", "CodePen"
]

const Sidebar2 = () => {

    const [isOpen, setIsOpen] = useState(true)
    
  return (
    <div>
        <aside className={`side-menu ${isOpen ? "open" : ""}`}>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburg">
                    <span></span>
                </div>
                <span className="arrow left"></span>
            </button>
            <svg viewBox="0 0 138 26" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" title="CodePen">
                <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
            </svg>
            <label className='label'>create</label>
            <div className="create">
                <button className="create-btn">
                    <span className='table'></span>
                    <span>Pen</span>
                    <span className='arrow down'></span>
                </button>
                <button className="create-btn">
                    <span className='table'></span>
                    <span>Project</span>
                </button>
                <button className="create-btn">
                    <span className='table'></span>
                    <span>Collection</span>
                </button>
            </div>
            <nav>
                {menuItems.map(item => (
                    <button className="item-btn" key={item}>{item}</button>
                ))}
            </nav>
        </aside>
        <div className="side-border" />
    </div>
  )
}

export default Sidebar2

