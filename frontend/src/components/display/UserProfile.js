import React from "react";
import SettingsMenu from "./SettingsMenu";
import '@radix-ui/themes/styles.css'
import { Flex, Text, Card, Box, Dialog, Button } from "@radix-ui/themes";
import { Avatar } from "@radix-ui/react-avatar";
import { GearIcon } from "@radix-ui/react-icons";

export default function UserProfile(props) {
    return (
        <Card >
            <Flex gap="3" align="center">
                <Avatar
                size="3"
                src={props.avatar}
                radius="full"
                fallback="T"
                />
                <Box>
                <Text as="div" size="2" weight="bold">
                    {props.username}
                </Text>
                <Text as="div" size="2" color="gray">
                    {props.status}
                </Text>
                </Box>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button><GearIcon /></Button>
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <SettingsMenu onClick={props.signOutOnClick}/>
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>
        </Card>

    )
}