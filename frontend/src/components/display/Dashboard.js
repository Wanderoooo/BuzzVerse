import React from "react";
import { useEffect, useState } from "react";
import '@radix-ui/themes/styles.css'
import { Theme, Grid, Flex, Button, ThemePanel, Separator, Text, Heading } from "@radix-ui/themes";
import Textbox from "@/components/input/Textbox";
import ChatView from "@/components/display/ChatView";
import { Message } from "@/pages/_app";
import { LeftMenu } from "./LeftMenu";
import FriendsMenu from "./FriendsMenu";
import { Friend, MessagingServer } from "@/pages/_app";
import ServerMenu from "./ServerMenu";





export default function DashBoard() {
    const sendBox = <Textbox placeholder='Type a message...' id='sendBox' change={getSendContent} variant='soft' style={{width:'2000px'}}/> ;
    
    // fake friend data
    const testFriend = new Friend('leon liang', 'leon');
    const testFriend2 = new Friend('alissa guo', 'alissa');
    const testFriend3 = new Friend('arthur guo', 'dawg');
    const testFriend4 = new Friend('hanson sun', 'hanson');
    const testFriend5 = new Friend('stanley', 'stan');
    const testFriend6 = new Friend('brandon', 'kyspire');
    const [friendList, setFriendList] = useState([testFriend, testFriend2, testFriend3, testFriend4, testFriend5 ]);
    const [selectedChannel, setSelectedChannel] = useState(0);
    
    const [sendContent, setSendContent] = useState('');

    function renderServer(server) {
        if (server == 'friends') {
            return (
                <FriendsMenu friendList={friendList} clicks={onClickChannelFunctions}/>
            )
        } else {
            console.log(selectedServer);
            console.log(serverList[selectedServer]);
            console.log(serverList[selectedServer].channels);
            return (
                <ServerMenu channelList={serverList[selectedServer].channels} clicks={onClickChannelFunctions}/> //fix clicks
            )
        }
    }


    const testServer1 = new MessagingServer('twitter gang', 'https://cdn-icons-png.flaticon.com/512/124/124021.png', [], ['x', 'xx', 'no']);
    const testServer2 = new MessagingServer('ig', 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', [], ['coding', 'reels']);
    const [selectedServer, setSelectedServer] = useState(0); //0 -> friends, 1 onwards -> servers
    const [serverList, setServerList] = useState(['friends', testServer1, testServer2]); //serverList[0] = friends list, 1 onwards -> actual servers


    let initalFriendMessages = [];
    for (let i = 0; i < friendList.length; i++) {
        initalFriendMessages.push([]);
    }
    let initalMessages = [];
    initalMessages.push(initalFriendMessages);
    let toPush;
    for (let i = 1; i < serverList.length; i++) {
        toPush = [];
        for (let j = 0; j < serverList[i].channels.length; j++) {
            toPush.push([]);
        }
        initalMessages.push(toPush);
    }
    const [messages, setMessages] = useState(initalMessages); //ith element in messages is a 2d array of messages with the ith server
    
    const chat = <ChatView messages={messages[selectedServer][selectedChannel]} />;

    function getSendContent(val) {
        document.addEventListener('keydown', function(event){
            if (event.key == 'Enter') {
                console.log(sendContent);
                
                sendTextMessage(sendContent);
            } // I CANT FIX THIS BUG IVE SPENT TOO LONG ON IT SOMEONE PLEASE FIX IT IT HAS TO DO WITH THE FACT THAT SETSTATE IS ASYNCHRONOUS
                // SO THE STATE ISNT UPDATED PROPERLY BEFORE THE MESSAGE IS SENT 🥲🥲🥲🥲🥲😡🤬
        })
        
        
        setSendContent(val.target.value);
        console.log(sendContent);

    }

    function sendTextMessage(text) {
        

        if (sendContent == undefined) {
            return;
        }
        console.log(text);
        let res1 = [];
        let res2 = [];
        let newMessages = [];
        
        for (let i = 0; i < messages.length; i++) {
            for (let j = 0; j < messages[i].length; j++) {
                for (let k = 0; k < messages[i][j].length; k++) {
                    res1.push(messages[i][j][k]);
                }
                res2.push(res1);
                res1 = [];
            }
            newMessages.push(res2);
            res2 = [];
            res1 = [];
        }

        newMessages[selectedServer][selectedChannel].push(new Message(text, new Date(), 'andrew'))

        setMessages(newMessages);
        document.getElementById('sendBox').value = "";
        setSendContent(undefined);
    } 

    let onClickChannelFunctions = [];
    for (let i = 0; i < friendList.length; i++) {
        onClickChannelFunctions.push(() => setSelectedChannel(i));
    }

    function changeServer(server) {
        setSelectedChannel(0);
        setSelectedServer(server);
    }
    
    let onClickServerFunctions = [];
    for (let i = 0; i < serverList.length; i++) {
        onClickServerFunctions.push(() => changeServer(i));
    }

    function renderHeader(friendSelected, channel) {
        if (friendSelected) {
            return <Heading>Chat with {friendList[selectedChannel].name}</Heading>;
        }
        return <Heading># {serverList[selectedServer].channels[selectedChannel]}</Heading>
    }
  
    return (
        
        <Theme appearance="dark" accentColor="teal" grayColor="gray" radius="full">
            <Grid columns="6" style={{gridTemplateColumns:'1fr 0fr 2fr 0fr 8fr 4fr'}} m='4' gap='4'>
                <Flex direction="column" gap="4" width='100%'>
                    <LeftMenu serverList={serverList} clicks={onClickServerFunctions}/>
                </Flex>
                <Separator orientation="vertical" size='4'/>
                {/* left menu */}
                <Flex direction='column' gap='4'> 
                    {renderServer(serverList[selectedServer])}
                </Flex>
                <Separator orientation="vertical" size='4'/>
                <Flex direction="column" gap="4">
                    {renderHeader(selectedServer === 0, selectedChannel)}
                    <Separator orientation="horizontal" size='4' />
                    <div className='scrollable'>
                        {chat}
                    </div>
                    <Flex direction="row" gap="4">
                        {sendBox}
                        <div style={{marginRight:'0', marginLeft:'auto'}}>
                            <Button onClick={() => sendTextMessage(sendContent)}>Send</Button>
                        </div>
                    </Flex>
                </Flex>
                <Separator orientation='vertical' size='4'/>
            </Grid>
        </Theme>
    )
}