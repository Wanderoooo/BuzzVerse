import React from "react";
import "@radix-ui/themes/styles.css"
import { Button } from "@radix-ui/themes";

export default function FriendButton(props) {
    return (
        <Button size='3' variant="soft" radius="large" id={props.id} onClick={props.onClick}>{props.name}</Button>
    )
}