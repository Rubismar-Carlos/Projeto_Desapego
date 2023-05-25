import React, { useState } from "react"

import styles from '../styles/boxuser.module.css'

import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'


const BoxUser = ({nome, numero, email, urlImg}) => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => setOpenModal(!openModal)

  return (
    <div>
        <div className={styles.container_box_user}>
            <div className={styles.box_user}>
                <div className={styles.box_user_img} onClick={handleOpenModal}>
                    <img src={urlImg} alt="imagem de url fornecida pelo o usuário" />
                </div>
            </div>
        </div>
        <div>
        </div>
        <div className={`${openModal ? `${styles.modal_open}` : `${styles.modal_close}`}`}>
            <div className={styles.container_modal}>
                <div className={styles.box_modal}>
                    <div className={styles.detalhes_modal}>
                    <div className={styles.btn_close_modal}>< AiOutlineClose onClick={handleOpenModal}/></div>
                        <div className={styles.img_modal}>
                            <img src={urlImg} alt="Imagem de url fornecida pelo usuário" />
                        </div>
                        <div className={styles.informacoes_modal}>
                            <span className={styles.span_user}>{nome}</span>
                            <span className={styles.span_user}>< FaWhatsapp /> {numero}</span>
                            <span className={styles.span_user}>{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoxUser

