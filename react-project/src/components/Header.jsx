function Header(props){
    return(
        <div style={{color: props.color}}>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}

export default Header
