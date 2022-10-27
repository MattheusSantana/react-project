import styles from "./Paragraph.module.css";

function Paragraph(props){
    
    return <p className={ styles.ParagraphContent}>{props.text}</p>
    
}

export default Paragraph;