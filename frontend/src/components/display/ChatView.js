import React from "react";
import '@radix-ui/themes/styles.css';
import { Text, Flex, Separator, Tooltip, Avatar } from "@radix-ui/themes";
import { Message } from "@/pages/_app";


// takes a list of messages sorted by time, with messages[0] as the latest message
export default function ChatView(props) {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    return (
        <Flex direction="column" gap="3">
            {props.messages.map((msg) => {
             return (
                    <>
                    <Text align='right' size='1'>{msg.time.getHours() + ':' + msg.time.getMinutes() + ', ' 
                        + months[msg.time.getMonth()] + ' ' + msg.time.getDate() + ' '}</Text>
                    <Text align='right' key={props.username + ''}>{msg.text}</Text>
                    </>
                )})}
        </Flex>
    )
}