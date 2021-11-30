
import { useState, useEffect } from "react";

export default function Timer() {
     const [count, setCount] = useState(0);

    /*useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },[]);

    return <h1>you've been using this site for {count} seconds!</h1>; */


    useEffect(() => {
        const timer = setInterval(() => {
          setCount((timer) => timer + 1);
        }, 1000);
        return () => clearInterval(timer)
      }, []); 

      return <h1>you've been using this site for {count} seconds!</h1>; 
}