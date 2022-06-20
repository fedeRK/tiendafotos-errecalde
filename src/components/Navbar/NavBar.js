import logo from '../../assets/logoNav.png'
import './NavBar.css';
import Cart from './CartWidget';

const NavBar = () => {
    return(        
        <header>
            <div className='initial'>
                <img className='logo' src={logo} alt="logo"/>
                <h1 className='title'>Fotos RK</h1>
            </div>
                <nav>
                    <a href="">Recitales</a>
                    <a href="">Macro</a>
                    <a href="">Paisajes</a>
                </nav>
                <Cart/>
        </header>
    )
}

export default NavBar
