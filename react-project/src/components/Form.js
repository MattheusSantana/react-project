import {useState} from "react";
import Button from "./Button";

function Form(){
  
    function eventFatherComponent(){
        console.log('Father component event called!');
    }

    const [name, setName] = useState("Visitor");

    return (
        <div>
            <h1>WELCOME {name}!</h1>

          
            <h3>Subscribe:</h3>
                <div>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email"/>
                </div>

                <Button event={eventFatherComponent} text="Subscribe"/>
            
        </div>
    )
}

export default Form