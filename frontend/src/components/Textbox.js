import React from "react";
import '@radix-ui/themes/styles.css';
import { TextField } from "@radix-ui/themes";
import { EyeOpenIcon, EyeNoneIcon} from '@radix-ui/react-icons'

export default function Textbox(props) {

    function printText(val) {
        console.log(val.target.value)
    }

    return (
        <>
            <TextField.Root>
                <TextField.Input placeholder={props.placeholder} onChange={printText} />
            </TextField.Root>
        </>
    )
}