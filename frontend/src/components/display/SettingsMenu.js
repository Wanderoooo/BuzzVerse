import React from "react";
import '@radix-ui/themes/styles.css'
import { Button, Flex } from "@radix-ui/themes";

export default function SettingsMenu(props) {
    return (
        <Flex direction='column'>
            <a href="./login">
                <Button onClick={props.onClick}>Sign out</Button>
            </a>
        </Flex>
    );
}