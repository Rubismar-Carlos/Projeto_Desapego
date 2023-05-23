'use client'

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import Link from 'next/link';

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
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {userData.length > 0 ? (
          userData.map((user) => (
            <li key={user._id}>
              Nome: {user.nome}, Contato: {user.numero}
            </li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
      <button><Link href={'/'} target={'_self'} >Retornar</Link></button>
    </div>
  );
};
