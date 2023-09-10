import React from "react";
import '@radix-ui/themes/styles.css' 
import { Button, Flex, Text } from "@radix-ui/themes"
import { Friend } from "@/pages/_app";

export default function FriendsMenu(props) {

    return (
        <Flex direction='column' gap='6'>
            {props.friendList.map((friend) => 
                <Button size='3'>{friend.name}</Button>
            )}
        </Flex>
    )
}