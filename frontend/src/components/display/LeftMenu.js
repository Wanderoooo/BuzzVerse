import React from "react";
import '@radix-ui/themes/styles.css'
import { Theme, Flex } from "@radix-ui/themes";
import * as Avatar from '@radix-ui/react-avatar';
import { MessagingServer } from "@/pages/_app";
import checkIcon from "../../assets/checkIcon.png"


export function LeftMenu({props}) {
    const testServer = new MessagingServer('check', '../assets/checkIcon.png', []);
    const [serverList, setServerList] = React.useState([testServer, testServer, testServer]); //replace with props.serverList later
    console.log(checkIcon);

    return (
        <Theme>
            <Flex direction='column' gap='3' m='3'>
                <Avatar.Root style={{width:'50px', height:'50px'}}>
                    <Avatar.Image
                    src="../../assets/checkIcon.png"
                    />
                </Avatar.Root>
                {serverList.map((server) => 
                    <img src={server.icon} alt={server.name} />
                )}
            </Flex>
        </Theme>
    )
}