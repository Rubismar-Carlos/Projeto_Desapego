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
    const [visivel, setVisivel] = useState(false)

    const handleOpenMenu = () => {

        setOpenMenu(!openMenu)


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
                < RxHamburgerMenu onClick={handleOpenMenu}/>
                < AiOutlineClose />
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