import {useState} from "react";


function Form(){
    function signUp(e){
        e.preventDefault()
        console.log("submit event");
    }
    const [name, setName] = useState("Visitor");

    return (
        <div>
            <h1>WELCOME {name}!</h1>

            <form onSubmit={signUp}>
            <h3>Subscribe:</h3>
                <div>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email"/>
                </div>

                <div>
                    <input type="submit" name="subscribe" value="subscribe"/>
                </div>
            </form>
        </div>
    )
}

export default Form