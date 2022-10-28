
function sendAlert(message){
    alert(`App says: ${message}`);
}

function AlertButton(props){
    return <button type="Button"  onClick={() => sendAlert(props.message)}> Try </button>
    
}

export default AlertButton