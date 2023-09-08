import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Theme, Text, Heading, Button } from "@radix-ui/themes";

import Textbox from "@/components/Textbox";
import PasswordBox from "@/components/PasswordBox";
import { PaddingIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Login() {
    const usernameField = <Textbox width='50%' placeholder='Enter your Username...' />;
    const passwordField = <PasswordBox width='50%' placeholder='Enter your Password...' />;
    console.log(usernameField.value) //testing to access username field value
    console.log(passwordField.value) //testing to access password field value
    
    return (
        <Theme accentColor="cyan"
        grayColor="gray"
        panelBackground="translucent"
        scaling="100%"
        appearance="dark"
        radius='large'
        hasBackground='true'>
            <Grid rows="5"> 
                <Box align='right' p='4'>
                    <Link underline='hover' href='./signup' color="blue" m='4'>Sign up</Link>
                </Box>
                <Heading align="center" size="8" p='4'>Login</Heading>
                <Flex direction="column" p='4' align="center">
                    <Text>Username:</Text>
                    {usernameField}
                </Flex>
                <Flex direction="column" p='4' align="center">
                    <Text>Password:</Text>
                    {passwordField} 
                </Flex>
                <Flex align='center' direction='column' p='4'>
                    <Button width="50%">Log In</Button>
                </Flex>
            </Grid>
        </Theme>
    )
}