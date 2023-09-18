import React from "react";
import '@radix-ui/themes/styles.css' 
import { Button, Flex, Text } from "@radix-ui/themes"
import { Friend } from "@/pages/_app";
import FriendChannelButton from "../input/FriendChannelButton";

export default function FriendsMenu(props) {
    return (
        <Flex direction='column' gap='3'>
            {props.friendList.map((friend) => 
                <FriendChannelButton name={props.friendList[props.friendList.indexOf(friend)].name} key={props.friendList.indexOf(friend)} 
                    onClick={props.clicks[props.friendList.indexOf(friend)]}/>
            )}
        </Flex>
    )
}