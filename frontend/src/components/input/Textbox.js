import React from "react";
import '@radix-ui/themes/styles.css';
import { TextField } from "@radix-ui/themes";

export default function Textbox(props) {

    function printText(val) {
        console.log(val.target.value)
    }

    return (
        <>
            <TextField.Root>
                <TextField.Input placeholder={props.placeholder} onChange={props.change} />
            </TextField.Root>
        </>
    )
}