'use client'

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import BoxUser from '<prefix>/components/BoxUser';

import Link from 'next/link';

import Layout from './layout';

import styles from '../styles/index.module.css'

export default function Home()  {
  const [userData, setUserData] = useState([]);

  const  router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get('/api/getUser');
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <Layout>
        <div>
      <h1>Lista de Usuários</h1>
      <div className={styles.container_home}>
        {userData.length > 0 ? (
          userData.map((user) => (
            <BoxUser 
              key={user._id}
              nome={user.nome}
              numero={user.numero}
              email={user.email}
              urlImg={user.urlImg}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <button><Link href={'/'} target={'_self'} >Retornar</Link></button>
    
    </div>
    </Layout>
  );
};
