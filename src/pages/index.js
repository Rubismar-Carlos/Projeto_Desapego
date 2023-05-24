'use client'

import { useState} from 'react'

import axios from 'axios';

import Link from 'next/link';

import styles from '../styles/navbar.module.css'

import Navbar from '<prefix>/components/Navbar';
import Layout from './layout';



export default function Home() {

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")
  const [urlImg, setUrlImg] = useState("")
  const [msg, setMsg] = useState("")


  const handleSubmit = async(e) => {

    e.preventDefault();

    setTimeout(() => {
      setMsg("")
    },3000)

    if(nome === "") {
      return setMsg("Digite um nome")
    }

    if(numero === "") {
      return setMsg("Digite o número de contato")
    }

    if(email === "") {
      return setMsg("Digite o email de contato")
    }

    console.log("Dados Atualizados", {nome, numero, email, urlImg})  

    axios
      .post('/api/user', {nome, numero, email, urlImg})
      .then((response) => {
        console.log("Dados enviados")
      }).catch((err) => {
        console.log(err)
      })

      setNome("")
      setNumero("")
      setEmail("")
      setUrlImg("")


  }

  return (
    < Layout>
        <main>
        <div>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="(XX) X XXXX-XXXX"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url da imagem"
          value={urlImg}
          onChange={(e) => setUrlImg(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      <p>{msg}</p>
        </div>
        <button><Link href={'/home'}>Ir para home</Link></button>
      </main>
    </Layout>
  )
}
