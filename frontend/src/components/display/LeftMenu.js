import React from "react";
import '@radix-ui/themes/styles.css'
import { Theme, Flex, Separator } from "@radix-ui/themes";
import * as Avatar from '@radix-ui/react-avatar';
import { MessagingServer } from "@/pages/_app";
import checkIcon from "../../assets/checkIcon.png"


export function LeftMenu(props) {

    return (
        <Theme>
            <Flex direction='column' gap='3' m='3'>
                <Avatar.Root>
                    <Avatar.Image
                    width='65px'
                    src="data:image/png;base64,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"
                    onClick={props.clicks[0]}
                    />
                </Avatar.Root>
                <Separator orientation="horizontal" size='3'/>
                {props.serverList.map((server) => 
                    //<img src={server.icon} alt={server.name} width='65px' key={'server' + server.name} onClick={props.clicks}/>
                    <Avatar.Root>
                        <Avatar.Image 
                        width='65px'src={server.icon} alt={server.name} onClick={props.clicks[props.serverList.indexOf(server)]} key={'server' + server.name}
                        />
                    </Avatar.Root>
                )}
            </Flex>
        </Theme>
    )
}