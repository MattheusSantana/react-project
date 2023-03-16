import React, {useState, useLayoutEffect} from 'react'

const UseLayoutEffect = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    const setPosition = ({x, y}) => {
        setX(x);
        setY(y);
    };

    useLayoutEffect(() => {
        window.addEventListener("mousemove", setPosition);
        return () => window.removeEventListener("mousemove", setPosition);
    }, []);

    return [x,y]
}

export default UseLayoutEffect