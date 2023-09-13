import React from "react";
import '@radix-ui/themes/styles.css';
import { Text, Flex } from "@radix-ui/themes";


// takes a list of messages sorted by time, with messages[0] as the latest message
export default function ChatView(props) {

    return (
        <Flex direction="column" gap="3">
            {props.messages.map((msg) => {
             return (
                   <Text align='right' key={props.username + ''}>{msg.text}</Text>
                )})}
        </Flex>
    )
}