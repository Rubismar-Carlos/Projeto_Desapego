import React, { useState } from "react"

import styles from '../styles/boxuser.module.css'

import { FaWhatsapp } from 'react-icons/fa'

const BoxUser = ({nome, numero, email, urlImg}) => {

    const [mouseOpen, setMouseLeave] = useState(false)

    const handleMouseOpen = () => setMouseLeave(!mouseOpen)

    const handleMouseLeave = () => setMouseLeave(true)

  return (
    <div>
        <div className={styles.container_box_user}>
            <div className={styles.box_user}>
                <div className={styles.box_user_img}>
                    <img src={urlImg} alt="imagem de url fornecida pelo o usuário" />
                </div>
            </div>
            <div className={styles.container_apresentacao} onMouseLeave={handleMouseLeave}>
                <div className={styles.box_apresentacao_user } onMouseEnter={handleMouseOpen}>

                </div>
                <div className={`${styles.box_dados_user} ${mouseOpen ? `${styles.active}` : `${styles.inactive}`}`} onMouseLeave={handleMouseLeave}>
                    <div className={styles.box_dados_user_}>
                        <div className={styles.dados_user}>
                            <h2>{nome}</h2>
                            <p><FaWhatsapp/> {numero}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoxUser

