import { useState } from "react";

export default function Backticks() {

    const [numberOne, setNumberOne] = useState<number | undefined>(undefined);
    const [numberTwo, setNumberTwo] = useState<number | undefined>(undefined);
    const [numberThree, setNumberThree] = useState<number>(0);


    const [total, setTotal] = useState<number | undefined>(undefined);


    function add(n1: number, n2: number, n3?: number) {
        if(n3 !== undefined) {
            setTotal(n1 + n2 + n3);
        }
        setTotal(n1 + n2);
    }

    return (
        <>
            <input 
                value={numberOne}
                onChange={e => setNumberOne(parseInt(e.target.value))}
                type="number"
                placeholder="Enter a number"
            />
            <input 
                value={numberOne}
                onChange={e => setNumberTwo(parseInt(e.target.value))}
                type="number"
                placeholder="Enter a number"
            />
            {total === undefined ? <></> : 
                                    total >= 2 ? <>Large number</> : <>small number</>}
        </>
    )
}