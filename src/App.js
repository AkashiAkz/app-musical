import ConteudoLateral from './Componentes/ConteudoLateral';
import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import './App.css';	
export default function App() {
  
  return (
    <div className="App">

      <ConteudoLateral />
      <ConteudoPrincipal />

      <div className='ConteudoPrincipal'>
        Conteúdo Principal
      </div>
  
    </div>
  );
}