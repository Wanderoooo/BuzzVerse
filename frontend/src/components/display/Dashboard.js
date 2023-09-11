import React from "react";
import '@radix-ui/themes/styles.css'
import { Theme, Grid, Flex, Button, ThemePanel, Separator, Text, Heading } from "@radix-ui/themes";
import Textbox from "@/components/input/Textbox";
import ChatView from "@/components/display/ChatView";
import { Message } from "@/pages/_app";
import { LeftMenu } from "./LeftMenu";
import FriendsMenu from "./FriendsMenu";
import { Friend } from "@/pages/_app";





export default function DashBoard() {
    const sendBox = <Textbox placeholder='Type a message...' change={getSendContent} variant='soft' style={{width:'2000px'}}/> ;
    
    // fake friend data
    const testFriend = new Friend('leon liang', 'leon');
    const testFriend2 = new Friend('alissa guo', 'alissa');
    const testFriend3 = new Friend('arthur guo', 'dawg');
    const testFriend4 = new Friend('hanson sun', 'hanson');
    const testFriend5 = new Friend('stanley', 'stan');
    const testFriend6 = new Friend('brandon', 'kyspire');
    const [friendList, setFriendList] = React.useState([testFriend, testFriend2, testFriend3, testFriend4, testFriend5 ]);
    const [selectedFriend, setSelectedFriend] = React.useState(0);

    let initalMessages = [];
    for (let i = 0; i < friendList.length; i++) {
        initalMessages.push([]);
    }
    const [messages, setMessages] = React.useState(initalMessages); //ith element in messages is an array of messages with the ith friend
    
    const [sendContent, setSendContent] = React.useState('');

    const chat = <ChatView messages={messages[selectedFriend]} />;

    function getSendContent(val) {
        setSendContent(val.target.value);
    }

    function sendTextMessage(text) {
        console.log(text);
        const res = [];
        for (let i = 0; i < messages[selectedFriend].length; i++) {
            res.push(messages[selectedFriend][i]);
        }
        res.push(new Message(text, 10, 'andrew'));

        // lines below replace a single entry in messages

        const copy = [];
        for (let i = 0; i < selectedFriend; i++) {
            copy.push(messages[i]);
        }
        copy.push(res);
        for (let i = selectedFriend + 1; i < messages.length; i++) {
            copy.push(messages[i])
        }
        setMessages(copy);
    }

    let onClickFriendFunctions = [];
    for (let i = 0; i < friendList.length; i++) {
        onClickFriendFunctions.push(() => setSelectedFriend(i));
    }

  
    return (
        <Theme appearance="dark" accentColor="teal" grayColor="gray" radius="full">
            <Grid columns="6" style={{gridTemplateColumns:'1fr 0.1fr 2fr 0.1fr 8fr 4fr'}} m='4' gap='4'>
                <Flex direction="column" gap="4" width='100%'>
                    <LeftMenu />
                </Flex>
                <Separator orientation="vertical" size='4'/>
                <Flex direction='column' gap='4'>
                    <FriendsMenu friendList={friendList} clicks={onClickFriendFunctions}/>
                </Flex>
                <Separator orientation="vertical" size='4'/>
                <Flex direction="column" gap="4">
                    <Heading>Chat with {friendList[selectedFriend].name}</Heading>
                    <Separator orientation="horizontal" size='4' />
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