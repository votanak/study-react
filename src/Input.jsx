import { useState } from "react";
import { useEffect } from "react"

export const Input = (props) => {
    return (
        <div>
            <input 
            value = {props.value}
            onChange={props.onChange}
            />
        </div>
    )
}