import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex } from "@radix-ui/themes";


// takes a list of messages sorted by time, with messages[0] as the latest message
export default function ChatView({messages}) {
    return (
        <Flex direction="column" gap="3">
            {messages.map((msg) => {
             return (
                   <Box>{msg.text}</Box>
                )})}
        </Flex>
    )
}