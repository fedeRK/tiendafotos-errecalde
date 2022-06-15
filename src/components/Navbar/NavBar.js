import logo from '../../assets/logoNav.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return(
        
        <header  style={styles.container} >
            <img style={styles.imagen} src={logo} alt="logo"/>
            <h1>Fotos RK</h1>
                <nav>
                    <a style={styles.anchors} href="">Recitales</a>
                    <a style={styles.anchors} href="">Macro</a>
                    <a style={styles.anchors} href="">Paisajes</a>
                </nav>
                <ShoppingCartIcon color="primary" fontSize="large"/>
        </header>
    )
}

export default NavBar

const styles ={
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#de3136"
        
    },
    navStyle: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    imagen: {
        width: '10%'
    },
    anchors: {
        margin: 50
    }
}