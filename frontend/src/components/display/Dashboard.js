import React from "react";
import '@radix-ui/themes/styles.css'
import { Theme, Grid, Flex, Button, ThemePanel, Separator } from "@radix-ui/themes";
import Textbox from "@/components/input/Textbox";
import ChatView from "@/components/display/ChatView";
import { Message } from "@/pages/_app";
import { LeftMenu } from "./LeftMenu";
import FriendsMenu from "./FriendsMenu";
import { Friend } from "@/pages/_app";





export default function DashBoard() {
    const sendBox = <Textbox placeholder='Type a message...' change={getSendContent} variant='soft' style={{width:'2000px'}}/> ;
    const [messages, setMessages] = React.useState([[],[],[],[],[],[]]); //ith element in messages is an array of messages with the ith friend
    const [sendContent, setSendContent] = React.useState('');
    

    const testFriend = new Friend('leon liang', 'leon');
    const testFriend2 = new Friend('alissa guo', 'alissa');
    const testFriend3 = new Friend('arthur guo', 'dawg');
    const testFriend4 = new Friend('hanson sun', 'hanson');
    const testFriend5 = new Friend('stanley', 'stan');
    const testFriend6 = new Friend('brandon', 'kyspire');
    const [friendList, setFriendList] = React.useState([testFriend, testFriend2, testFriend3, testFriend4, testFriend5, testFriend6]);
    const [selectedFriend, setSelectedFriend] = React.useState(0);

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
        <Theme appearance="dark" accentColor="teal" grayColor="gray" radius="full">
            <Grid columns="4" style={{gridTemplateColumns:'1fr 2fr 8fr 4fr'}} m='4' gap='4'>
                <Flex direction="column" gap="4" width='100%'>
                    <LeftMenu />
                </Flex>
                <Flex direction='column' gap='4'>
                    <FriendsMenu friendList={friendList}/>
                </Flex>
                <Flex direction="column" gap="4">
                    <div className='scrollable'>
                        {chat}
                    </div>
                    <Flex direction="row" gap="4">
                        {sendBox}
                        <div style={{marginRight:'0', marginLeft:'auto'}}>
                            <Button onClick={() => sendTextMessage(sendContent)} >Send</Button>
                        </div>
                    </Flex>
                </Flex>
                <Separator orientation='vertical' size='4'/>
            </Grid>
        </Theme>
    )
}