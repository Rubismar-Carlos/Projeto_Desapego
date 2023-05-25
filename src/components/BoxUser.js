import React, { useState } from "react"

import styles from '../styles/boxuser.module.css'

import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'


const BoxUser = ({nome, numero, email, urlImg}) => {

    const [mouseOpen, setMouseLeave] = useState(true)

    const [openModal, setOpenModal] = useState(false)

    const handleMouseOpen = () => setMouseLeave(!mouseOpen)

    const handleMouseLeave = () => setMouseLeave(!mouseOpen)

    const handleOpenModal = () => setOpenModal(!openModal)

  return (
    <div>
        <div className={styles.container_box_user}>
            <div className={styles.box_user} onMouseLeave={handleMouseLeave}>
                <div className={styles.box_user_img}>
                    <img src={urlImg} alt="imagem de url fornecida pelo o usuário" />
                </div>
            </div>
            <div className={styles.container_apresentacao} onMouseLeave={handleMouseLeave} onClick={handleOpenModal}>
                <div className={styles.box_apresentacao_user } onMouseEnter={handleMouseOpen}>

                </div>
                <div className={`${styles.box_dados_user} ${mouseOpen ? `${styles.active}` : `${styles.inactive}`}`}>
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
        <div>
        </div>
        <div className={`${openModal ? `${styles.modal_open}` : `${styles.modal_close}`}`}>
            <div className={styles.container_modal}>
                <div className={styles.box_modal}>
                <div className={styles.btn_close_modal}>< AiOutlineClose onClick={handleOpenModal}/></div>
                    <div className={styles.detalhes_modal}>
                        <div className={styles.img_modal}>
                            <img src={urlImg} alt="Imagem de url fornecida pelo usuário" />
                        </div>
                        <div className={styles.informacoes_modal}>
                            <span>{nome}</span>
                            <span>< FaWhatsapp /> {numero}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoxUser

