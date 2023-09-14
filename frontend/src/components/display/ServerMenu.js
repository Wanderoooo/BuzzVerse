import React from "react";
import '@radix-ui/themes/styles.css'
import { Flex } from "@radix-ui/themes";
import FriendChannelButton from "../input/FriendChannelButton";

export default function ServerMenu(props) {
    return (
        <Flex direction='column' gap='3'>
            {props.channelList.map((channel) => 
                <FriendChannelButton name={props.channelList[props.channelList.indexOf(channel)]} key={props.channelList.indexOf(channel) + 'channel'} 
                    onClick={props.clicks[props.channelList.indexOf(channel)]}/>
            )}
        </Flex>
    )
}