import { useState, useEffect } from "react";
export const Counter =()=>{
    const [count, setCount]=useState(0);

    useEffect(()=>{
        let id=setInterval(()=>{
            console.log("running interval");
            setCount((preValue)=>{
                console.log("setting state", preValue);
                if(preValue>=10)
                {
                    clearInterval(id)
                    return 10;
                }
                return preValue +1;
            });
        },1000)
        return ()=>{
            clearInterval(id);
        };
    },[]);
    return (
        <div>Count: {count}</div>
    );
};