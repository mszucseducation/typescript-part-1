import { useEffect, useState } from "react";

export default function ExampleThree() {

    const data: string[] = ["sunny", "rainy", "cloudy"]
    const [number, setNumber] = useState<number>(-1);


    useEffect(() => {
        setNumber(Math.floor(Math.random() * 5));
    }, [])
    

    if(data[number] === "sunny") {
        console.log(data[number])
        return (
            <>
                Time to go outside and to the beach!
            </>
        )
    } else if(data[number] === "rainy") {
        console.log(data[number])
        return (
            <>
                Stay inside!
            </>
        )
    } else if(data[number] === "cloudy") {
        console.log(data[number])
        return (
            <>
                Go for a walk outside!
            </>
        )
    } else {
        return <></>
    }
    
}