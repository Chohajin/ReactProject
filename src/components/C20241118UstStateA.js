import React from 'react'

import {useState} from "react";

export default function C20241118UstStateA() {
    const [count, setState] = useState(0);
    const [light, setLight] = Light(0);

    console.log(count);

    return (
        <>
            <div>C20241118UstStateA : {state}</div>
            <button onClick={() => {
                setState(state + 2);
            }}>변하는지 확인</button>

            <div>light : {light}</div>
            <button onClick={() => {
                setLight(light === "ON" ? "OFF":"ON");
            }}>{light}</button>
        </>
    )
}