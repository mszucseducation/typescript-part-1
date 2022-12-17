import { useEffect, useState } from "react";

export default function ExampleOne() {
    const [color, setColor]     = useState<String>("red")
    const [holiday, setHoliday] = useState<String>("");

    useEffect(() => {
        if(color === "red" || color === "green") {
            setHoliday("Christmas");
        } else {
            setHoliday("Nothing");
        }
    })

    return (
        <>
            {
                holiday.length > 0 ? <p>{holiday}</p> : <></>
            }
        </>
    )
}