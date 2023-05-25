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
      <div className={styles.index}>
        <div className={styles.banner}>
          <h1>DESAPEGO</h1>
          <p>Site desapego, poste seu produto e deixa que a gente vende ele para você.</p>
        </div>
        <div>
          <span className={styles.span_title} >Produtos</span>
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
      </div>
      </div>
    </Layout>
  );
};
