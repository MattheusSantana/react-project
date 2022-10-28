import {useState} from "react";
import Button from "./Button";

function Form(){
  
    function eventParentComponent(){
        console.log('Parent component event called!');
    }

    function clearEmail(){
        setEmail('');
    }

    const [name, setName] = useState("Visitor");
    const [email, setEmail] = useState();

    return (
        <div>
            <h1>WELCOME {name}!</h1>

          
            <h3>Subscribe:</h3>
                <div>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <Button text="Subscribe" />
                
                {email && (
                    <div>
                        {email}
                        <Button event={clearEmail}  text="clear"/>
                    </div>
                )}
            
        </div>
    )
}

export default Form