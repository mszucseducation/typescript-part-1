import { useState } from "react";

export default function Backticks() {
    const name: string = "Monika";
    const welcome: string = "Welcome to the page " + name;

    const [message, setMessage] = useState<String>(welcome);

    return (
        <>
            {message}
        </>
    )
}