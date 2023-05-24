'use client'
import React, { useState } from "react"

// ccs module na página styles
import styles from '../styles/navbar.module.css'



import Link from "next/link"

// react icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'


export default function Navbar() {
    
    const [openMenu, setOpenMenu] = useState(false)
    const [btnVisivel, setBtnVisivel] = useState(true)

    const handleOpenMenu = () => {

        setOpenMenu(!openMenu)

        setBtnVisivel(false)

        console.log("Menu Open")

    }

    const handleCloseMenu = () => {

        setOpenMenu(false)

        setBtnVisivel(true)

        console.log("Menu Closed")

    }


    return <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="" alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'} target={"_self"}>
                            INÍCIO
                        </Link>
                    </li>
                    <li>
                        <Link href={'/home'} target={"_self"}>
                            CADASTRAR
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.btn_menu_mobile}>
                {btnVisivel && < RxHamburgerMenu onClick={handleOpenMenu}/>}
                {!btnVisivel && < AiOutlineClose  onClick={handleCloseMenu}/>}
            </div>
        </div>
        <div className={`${styles.menu_mobile} ${openMenu ? `${styles.menu_ativado}` : `${styles.menu_desativado}` }`}>
            <ul>
                <li>
                    <Link href={'/'} target={"_self"}>
                        INÍCIO
                    </Link>
                </li>
                <li>
                    <Link href={'/home'} target={"_self"}>
                        CADASTRAR
                    </Link>
                </li>
            </ul>
        </div>
    </div>

}