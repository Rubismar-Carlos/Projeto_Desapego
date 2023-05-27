'use client'

import { useState} from 'react'

import axios from 'axios';

import Layout from './layout';

import styles from '../styles/cadastrar.module.css'



export default function Home() {

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")
  const [urlImg, setUrlImg] = useState("")
  const [produto, setProduto] = useState("")
  const [msgError, setMsgError] = useState("")
  const [msgSucesso, setMsgSucesso] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) => {

    e.preventDefault();

    setTimeout(() => {
      setMsgError("")
      setMsgSucesso("")
    },3000)

    // Validando que todos os inputs recebam dados
    if(nome === "") {
      return setMsgError("Digite seu nome")
    }

    if(numero === "") {
      return setMsgError("Digite seu número de telefone")
    }

    if(email === "") {
      return setMsgError("Digite seu e-mail")
    }

    if(produto === "") {
      return setMsgError("Digite o nome do produto")
    }


    if(urlImg === "") {
      return setMsgError("Digite a url da foto")
    }

    setLoading(true)

    // efeito de carregamento loading
    setTimeout(() => {

      console.log("Dados Atualizados", {nome, numero, email, urlImg, produto})  

      // limpando os inputs assim que for enviado para o banco de dados
      setNome("")
      setNumero("")
      setEmail("")
      setUrlImg("")
      setProduto("")

      setLoading(false)

      setMsgSucesso("Dados enviado com sucesso!")
    }, 1500 )
    
    axios
      .post('/api/user', {nome, numero, email, urlImg, produto})
      .then((response) => {
        console.log("Dados enviados")
      }).catch((err) => {
        console.log(err)
      })

      


  }

  return (
    < Layout>
        <main>
        <div className={styles.box_form}>
          <div className={styles.box_msg}>
            <p className={styles.msg_error} >{msgError}</p>
            <p className={styles.msg_sucesso}>{msgSucesso}</p>
          </div>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          minLength={3}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone Ex: (DDD) X XXXX-XXXX"
          inputMode='numeric'
          pattern="[0-9]*"
          maxLength={"11"}
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome do produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          type="url"
          placeholder="Url da imagem"
          value={urlImg}
          onChange={(e) => setUrlImg(e.target.value)}
        />

       <button type="submit" className={loading ? `${styles.loading_ativado}` : `${styles.loading_desativado}`} >
        {loading ? (
          <div className={styles.loading}></div>
        ) : (
          "Enviar"
        )}
       </button>
      </form>
        </div>
        
      </main>
    </Layout>
  )
}
