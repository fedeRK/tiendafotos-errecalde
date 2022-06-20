function ItemListContainer(props) {
    const {proximamente} = props;

    return(
        <h2 style={styles.container}>Tienda en Construcción</h2>        
    );
}

export default ItemListContainer;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px'
    }
}