import React from "react";
import '@radix-ui/themes/styles.css';
import { TextField } from "@radix-ui/themes";
import { EyeOpenIcon, EyeNoneIcon} from '@radix-ui/react-icons'

export default function PasswordBox(props) {

    const [passwordViewable, setPasswordViewable] = React.useState(false);

    function changeViewable() {
        setPasswordViewable(passwordViewable => !passwordViewable)
    }

    function viewableToString(viewable) {
        if (viewable) {
            return '';
        }
        return 'password';
    }

    function viewableToIcon(viewable) {
        if (viewable) {
            return <EyeOpenIcon onClick={changeViewable} />;
        }
        return <EyeNoneIcon onClick={changeViewable} />
    }

    function printText(val) {
        console.log(val.target.value)
    }

    return (
        <>
            <TextField.Root>
                <TextField.Input placeholder={props.placeholder} id={props.id} onChange={props.onChange} type={viewableToString(passwordViewable)} name={props.name}/>
                <TextField.Slot>
                    {viewableToIcon(passwordViewable)}
                </TextField.Slot>
            </TextField.Root>
        </>
    )
}