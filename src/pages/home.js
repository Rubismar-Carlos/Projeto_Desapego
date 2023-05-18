'use client'

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Link from 'next/link';

export default function Home()  {
  const [userData, setUserData] = useState([]);

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

  const handleDeleteUser = async (userId) => {
    try {
        const response = await axios.delete(`/api/deleteUser/${userId}`);
        console.log(response.data);
        getUserData();
      } catch (error) {
        console.error(error);
      }
};

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {userData.length > 0 ? (
          userData.map((user) => (
            <li key={user._id}>
              Nome: {user.nome}, Contato: {user.numero}
              <button onClick={() => handleDeleteUser(user._id)}>Deletar</button>
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
