import logo from '../../assets/logoNav.png'
import './NavBar.css';
import Cart from './CartWidget';
import { Link,NavLink } from 'react-router-dom';

const NavBar = () => {
    const categorias = [
        {name:"Zapatillas", id:0, route:"/categoria/zapatillas"},
        {name:"Botas", id:1, route:"/categoria/botas", className:"px-5"},
        {name:"Zapatos", id:2, route:"/categoria/zapatos"},
    ];

    return(        
        <header>
            <div className='flex'>
                <Link to={"/"}><img className='logo' src={logo} alt="logo"/></Link>
                
                <h1 className='title text-3xl pt-8'>Zapatos del Bahiano</h1>
            </div>
                <nav>
                    {categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.route}className={categoria.className}>{categoria.name}</NavLink>)}
                </nav>
                <Link to={"/cart"}><Cart/></Link>
                
        </header>
    )
}

export default NavBar
