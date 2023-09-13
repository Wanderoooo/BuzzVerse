import React from "react";
import '@radix-ui/themes/styles.css'
import { Flex } from "@radix-ui/themes";
import FriendChannelButton from "../input/FriendChannelButton";

export default function ServerMenu(props) {
    return (
        <Flex direction='column' gap='3'>
            {props.serverList.map((server) => 
                <FriendChannelButton name={props.serverList[props.serverList.indexOf(server)].name} key={props.serverList.indexOf(server) + 'server'} 
                    onClick={props.clicks[props.serverList.indexOf(server)]}/>
            )}
        </Flex>
    )
}