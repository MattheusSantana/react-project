
function sendAlert(message){
    alert(`App says: ${message}`);
}

function AlertButton(props){
    console.log(props.message);
    return <button type="Button"  onClick={() => sendAlert(props.message)}> Try </button>
    
}

export default AlertButton