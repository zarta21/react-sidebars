import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { navIcons } from '../../icons/icons'
import "./sidebar.css"

library.add(fab)
library.add(fas)
library.add(far)


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <aside className={`sidebar ${ isOpen ? "open" : "" }`}>
        <div className="sidebar-inner">
            <header className="sidebar-header">
                <button className="burger-btn" type='button' onClick={() => setIsOpen(!isOpen)}>
                    <label className='hamburger-menu'>
                        <input className='check' type="checkbox" />
                    </label>
                    <span>{isOpen ? "Menu" : ""}</span>
                </button>
            </header>
            <nav className="sidebar-menu">
                { navIcons.map(item => (
                    <button className="sidebar-btn" key={item.id}>
                        <div className="icon">
                            <span>{<FontAwesomeIcon icon={item.icon} />}</span>
                        </div>
                        <div className='text'><p>{item.name}</p></div>
                    </button>
                ))}
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar