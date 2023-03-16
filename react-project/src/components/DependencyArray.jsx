import React, { useEffect, useState } from 'react'

const DependencyArray = () => {
    const [val, setVal] = useState("");
    const [phrase, setPhrase] = useState("example phrase");

    const createPhrase = () => {
        setPhrase(val);
        setVal("");
    };

    useEffect(() => {
        console.log(`typing ${val}`);
    }, [val]);

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
    }, [phrase]);
  
    useEffect(() => {
        console.log("only once after initial render");
    }, []);

    return (
        <>
            <label>Favorite Phrase</label>
            <input type="text" value={val} placeholder={phrase}
            onChange={e => setVal(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )
}

export default DependencyArray