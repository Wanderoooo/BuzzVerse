import React from "react";
import '@radix-ui/themes/styles.css';
import { TextField } from "@radix-ui/themes";

export default function Textbox() {
    function printText(val) {
        console.log(val.target.value)
    }

    return (
        <>
            <TextField.Root>
                <TextField.Input placeholder="Type a message..." onChange={printText} />
            </TextField.Root>
        </>
    )
}