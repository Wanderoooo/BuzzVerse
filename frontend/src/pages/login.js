import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Theme, Text, Heading, Button } from "@radix-ui/themes";

import Textbox from "@/components/Textbox";
import PasswordBox from "@/components/PasswordBox";
import { PaddingIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Login() {
    
    return (
        <Theme accentColor="cyan"
        grayColor="gray"
        panelBackground="translucent"
        scaling="100%"
        appearance="dark"
        radius='large'
        hasBackground='true'>
            <Grid rows="5" width='auto'> 
                <div align='right'>
                    <Link underline='hover' href='./test' color="blue">Sign up</Link>
                </div>
                <Heading align="center" size="7">Login</Heading>
                <Flex direction="column" gap="3" align="center" width="100%" height="100%">
                    <Textbox width='50%' placeholder='Enter your Username...' />
                    <PasswordBox width='50%' placeholder='Enter your Password...' />
                </Flex>
                <Box height="1"></Box>
                <Button width="50%">Log In</Button>
            </Grid>
        </Theme>
    )
}