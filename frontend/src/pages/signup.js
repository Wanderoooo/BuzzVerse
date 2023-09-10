import React from "react";
import '@radix-ui/themes/styles.css';
import { Flex, Grid, Theme, Text, Heading, ThemePanel, Button, Box } from "@radix-ui/themes";
import Link from "next/link";
import Textbox from "@/components/input/Textbox";
import PasswordBox from "@/components/input/PasswordBox";

export default function Signup() {
    const usernameField = <Textbox placeholder='Enter your username...' padding='30px' />;
    const passwordField = <PasswordBox placeholder='Enter your password...'/>;
    const passwordCheckField = <PasswordBox placeholder='Re-enter your password...'/>;

    function createUser(username, password) {

    }

    return (
        <Theme
        accentColor="cyan"
        grayColor="gray"
        panelBackground="translucent"
        scaling="100%"
        appearance="dark"
        radius='large'>
            <Grid rows='6'>
                <Box align='right' p='3'>
                    <Link href='./login' color="blue">Log In</Link>
                </Box>
                <Heading align='center' size='8'>Sign Up</Heading>
                <Flex align='center' justify='left' direction='column' p='4'>
                    <Text justify='left' width='300px'>Username:</Text>
                    {usernameField}
                </Flex>
                <Flex align='center' direction='column' p='4'>
                    <Text>Password:</Text>
                    {passwordField}
                </Flex>
                <Flex align='center' direction='column' p='4'>
                    <Text>Verify your password:</Text>
                    {passwordCheckField}
                </Flex>
                <Flex align='center' direction='column' p='4'>
                    <Button onClick={createUser()}>Sign Up</Button>
                </Flex>
            </Grid>
        </Theme>
    )
}