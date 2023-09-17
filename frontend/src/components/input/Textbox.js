import React from "react";
import '@radix-ui/themes/styles.css';
import { TextField } from "@radix-ui/themes";

export default function Textbox(props) {

    function printText(val) {
        console.log(val.target.value)
    }

    return (
        <TextField.Input placeholder={props.placeholder} id={props.id} onChange={props.change} variant={props.variant} width={props.width}/>
    )
}