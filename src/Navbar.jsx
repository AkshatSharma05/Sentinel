import './Navbar.css'
import {Link} from "react-router-dom"

export default function App() {
    return (
        
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
        </style>
        <div className='logotext'>SENTINEL</div>
        <div className = 'navbar'> 
          <div>

          <Link to="/AppPage" className='logo'>
          <img width="48" height="48" src="https://img.icons8.com/officel/40/graph.png" alt="graph"/>
          </Link>
    
          <Link to = "/DiseasePage" className='logo'>
          <img width="48" height="48" src="https://img.icons8.com/emoji/48/exclamation-mark-emoji.png" alt="exclamation-mark-emoji"/>
          </Link>
          <div>
          <Link to="/" className='logo'>
          <img width="48" height="48" src="https://img.icons8.com/color/48/exit.png" alt="exit"/>
          </Link>
          </div>
          </div>
        </div>
      </>

      );
}

