import React, {useEffect, useState} from 'react'

const Checkbox = () => {
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        console.log(checked ? "checked" : "not checked" );
    });
    
    return (
    <>
    <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
    {checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;