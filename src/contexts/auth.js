import React, { createContext, useState  } from 'react';
import api from '../services/api'
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null); 
  const [loginAuth, setLoginAuth ] = useState(false);

  async function acessar(login, id){
      setLoginAuth(true);
      if(login === '' || id === '') return;

      const userPost = {
        login: login,
        id: id
      };

      try {
        const response = await api.post("/logar", userPost);
        const {login, id} = response.data;
        setUser({
          login,
          id
        });
        setLoginAuth(false);
      } catch (err) {
        alert(err)
        setLoginAuth(false);
      }
  }

 return (
   <AuthContext.Provider value={{signed:!!user, user, acessar, loginAuth }}>
     { children }
   </AuthContext.Provider>
  );
}