import { useState } from "react"

export default function ExampleOne() {
    const [number, setNumber] = useState<number | undefined>(undefined);

    return (
        <>
            <input 
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
                type="number"
                placeholder="Enter a number"
            />
            {number === undefined ? <></> : 
                                    number >= 2 ? <>Large number</> : <>small number</>}
        </>
    )
}