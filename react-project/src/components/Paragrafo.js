import styles from "./Paragrafo.module.css";

function Paragrafo(props){
    
    return <p className={ styles.paragrafoContent}>{props.text}</p>
    
}

export default Paragrafo;