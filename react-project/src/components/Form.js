function Form(){
    function signUp(e){
        e.preventDefault()
        console.log("event");
    }
    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={signUp}>
                <div>
                    <input type="email" name="email" placeholder="Email"></input>
                </div>

                <div>
                    <input type="submit" name="signup" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default Form