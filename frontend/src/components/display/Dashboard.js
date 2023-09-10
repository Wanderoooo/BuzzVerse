import React from "react";
import '@radix-ui/themes/styles.css'
import { Theme, Grid, Flex, Button } from "@radix-ui/themes";
import Textbox from "@/components/input/Textbox";
import ChatView from "@/components/display/ChatView";
import { Message } from "@/pages/_app";
import { LeftMenu } from "./LeftMenu";





export default function DashBoard() {
    const sendBox = <Textbox placeholder='Type a message...' change={getSendContent}/> ;
    const [messages, setMessages] = React.useState([]);
    const [sendContent, setSendContent] = React.useState('');

    const chat = <ChatView messages={messages} />;

    function getSendContent(val) {
        setSendContent(val.target.value);
    }

    function sendTextMessage(text) {
        console.log(text);
        const res = [];
        for (let i = 0; i < messages.length; i++) {
            res.push(messages[i]);
        }
        res.push(new Message(text, 10, 'andrew'));
        setMessages(res);
    }
  
    return (
        <>
        <Theme
        accentColor="cyan"
        grayColor="gray"
        panelBackground="translucent"
        scaling="100%"
        appearance="dark"
        radius='large'
        hasBackground='true'>
        <Grid columns="3">
            <Flex direction="column" gap="4" width='100%'>
                <LeftMenu />
            </Flex>
            <Flex direction="column" gap="4" width='100%'>
            <div className='scrollable'>
                {chat}
            </div>
            <Flex direction="row" gap="4">
                {sendBox}
                <Button onClick={() => sendTextMessage(sendContent)}>Send</Button>
            </Flex>
            </Flex>
        </Grid>
        </Theme>
        </>
    )
}