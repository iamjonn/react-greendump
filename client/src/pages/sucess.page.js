import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom'; 
import React, {useEffect, useState} from 'react';

const supabase = createClient("https://uvlfrruzkgiuuyrqqlom.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bGZycnV6a2dpdXV5cnFxbG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMDgyMTgsImV4cCI6MjAxNzU4NDIxOH0.2WcPJXURQ6WyKMivmuH77986-ywP_XlaEF6JhK8TSA0");



function Sucess() {
const [user, setUser] = useState({});
const navigate = useNavigate();

useEffect(() => {
  async function getuserData(){
    await supabase.auth.getUser().then((value) => {
      //verifica existe usuario
      if(value.data?.user){
        console.log(value.data.user);
        setUser(value.data.user);
      }
    });
  }
  getuserData();

},[]);

async function signOut(){
  const {error} = await supabase.auth.signOut();
  navigate('/');
} 



  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !==0 ?
           <>
            <h1>Success</h1>
            <button onClick={signOut}>Sair</button>
           </>
        :
        <>
            <h1>Usuario nao esta logado</h1>
            <button onClick={() => {navigate("/")}}>Voltar Para Tela principal</button>
           </>

        }
      </header>
    </div>
  );
}

export default Sucess;