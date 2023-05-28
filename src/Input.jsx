import { useState } from "react";
import { useEffect } from "react"

export const Input = (props) => {
    console.log(props.value);
    return (
        <div>
            <input 
            value = {props.value}
            onChange={(e) => props.onChange}
            />
        </div>
    )
}