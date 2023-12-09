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
      navigate('/success');
    }
    else {
      // ENCAMINHA PARA TELA DE LOGIN
      navigate('/');
    }
  })

  return (
    <div className="App">
      <header className="App-header">
          <Auth
            supabaseClient={supabase}
            appearance={{theme: ThemeSupa}}
            theme="dark"
            providers={["discord"]}
          />
      </header>
    </div>
  );
}

export default Login;