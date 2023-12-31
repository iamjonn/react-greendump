import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom'; 

const supabase = createClient("https://uvlfrruzkgiuuyrqqlom.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bGZycnV6a2dpdXV5cnFxbG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMDgyMTgsImV4cCI6MjAxNzU4NDIxOH0.2WcPJXURQ6WyKMivmuH77986-ywP_XlaEF6JhK8TSA0");

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') {
      // ENCAMINHA PARA TELA DE SUCESSO
      navigate('/produtos');
      //VAI MUDAR PARA O SITE DEPOIS DE 5SEG
      setTimeout(() => {
        navigate('/produtos');
      }, 5000);
    }
    
    else {
      // ENCAMINHA PARA TELA DE LOGIN
      navigate('/');
    }
  })

  return (
    
    <div className='body'>
    <div className="App">
      <header className="App-header">
      <h1 className='txtcmc'><span class="bemvindo">Bem-vindo(a) ao </span><span class="green">Green</span><span class="dump">Dump</span></h1>
          <Auth
            supabaseClient={supabase}
            appearance={{theme: ThemeSupa}}
            theme=""
            providers={["discord"]}
          />
      </header>
    </div></div>
  );
}

export default Login;
