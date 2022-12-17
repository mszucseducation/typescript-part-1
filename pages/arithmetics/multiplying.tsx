import { useState } from "react";

export default function Backticks() {

    const [total, setTotal] = useState<number>();

    let numberOne = 3;
    let numberTwo = 6;

    function add(n1: number, n2: number) {
        setTotal(n1 * n2);
    }

    return (
        <>
            <button onClick={() => add(numberOne, numberTwo)}>Multiplying numbers</button>
            {total}
        </>
    )
}