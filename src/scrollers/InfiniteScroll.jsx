import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "./styles.scss"


const items = [
    {
        id: '1',
        icon: 'fa-brands fa-square-js'
    },
    {
        id: '2',
        icon: 'fa-brands fa-node-js'
    },
    {
        id: '3',
        icon: 'fa-brands fa-html5'
    },
    {
        id: '4',
        icon: 'fa-brands fa-css3-alt'
    },
    {
        id: '5',
        icon: 'fa-brands fa-react'
    },
    {
        id: '6',
        icon: 'fa-brands fa-sass'
    },
    {
        id: '7',
        icon: 'fa-brands fa-bootstrap'
    },
    {
        id: '8',
        icon: 'fa-brands fa-java'
    },
]

library.add(fab)
library.add(fas)
library.add(far)

const InfiniteScroll = () => {
    

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        const addAnimation = () => {
            scrollers.forEach(scroller => {
                scroller.setAttribute("data-animated", true)

                const itemsArr = scroller.querySelector(".scroller-elements")
                const scrollerContent = Array.from(itemsArr.children)

                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true)
                    duplicatedItem.setAttribute("aria-hidden", true)

                    itemsArr.appendChild(duplicatedItem)
                })

            })
        }
        addAnimation()
    })
    

  return (
    <div className='container'>
        <h1>Infinite Horizontal Scroll</h1>
        <div className="scroller">
            <ul className="items-list scroller-elements">
                {items.map(item => (
                    <li key={item.id}><span className={item.icon}>{<FontAwesomeIcon icon={item.icon} />}</span></li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default InfiniteScroll