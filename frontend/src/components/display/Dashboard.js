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
    const [selectedFriend, setSelectedFriend] = useState(0);

    let initalMessages = [];
    for (let i = 0; i < friendList.length; i++) {
        initalMessages.push([]);
    }
    const [messages, setMessages] = useState(initalMessages); //ith element in messages is an array of messages with the ith friend
    
    const [sendContent, setSendContent] = useState('');

    function renderServer(server) {
        if (server == 'friends') {
            return <FriendsMenu friendList={friendList} clicks={onClickFriendFunctions}/>;
        } else {
            return (
                <ServerMenu channelList={serverList[selectedServer].channels} clicks={onClickServerFunctions}/> //fix clicks
            )
        }
    }


    const testServer1 = new MessagingServer('twitter gang', 'https://cdn-icons-png.flaticon.com/512/124/124021.png', [], ['kys', 'pee']);
    const testServer2 = new MessagingServer('ig', 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', ['coding', 'nsfw']);
    const [selectedServer, setSelectedServer] = useState(0); //0 -> friends, 1 onwards -> servers
    const [serverList, setServerList] = useState(['friends', testServer1, testServer2]); //serverList[0] = friends list, 1 onwards -> actual servers

    const chat = <ChatView messages={messages[selectedFriend]} />;

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
        document.getElementById('sendBox').value = "";
        setSendContent(undefined);
    } 

    let onClickFriendFunctions = [];
    for (let i = 0; i < friendList.length; i++) {
        onClickFriendFunctions.push(() => setSelectedFriend(i));
    }
    
    let onClickServerFunctions = [];
    for (let i = 0; i < serverList.length; i++) {
        onClickServerFunctions.push(() => setSelectedServer(i));
    }
  
    return (
        
        <Theme appearance="dark" accentColor="teal" grayColor="gray" radius="full">
            <Text>{selectedServer}</Text>
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
                    <Heading>Chat with {friendList[selectedFriend].name}</Heading>
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