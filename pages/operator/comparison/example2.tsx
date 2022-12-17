import { useState } from "react"

export default function ExampleTwo() {
    const [name, setName] = useState<String | null>(null);

    return (
        <>
            <input 
                onChange={e => setName(e.target.value)}
                type="string"
                placeholder="Enter a name"
            />
            {name === null ? <></> : <>{name}</>}
        </>
    )
}