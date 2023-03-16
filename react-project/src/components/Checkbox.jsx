import React, {useEffect, useReducer, useState} from 'react'

const Checkbox = () => {
    const [checked, setChecked] = useState(false);
    const [check, toggle] = useReducer(check => !check, false);


    useEffect(() => {
        console.log(checked ? "checked is checked" : "checked is not checked" );
        console.log(check ? "check is checked" : "check is not checked" );

    });
    
    return (
    <>
    <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
    <input type="checkbox" value={check} onChange={toggle} />
    {checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;