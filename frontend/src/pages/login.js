import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Theme, Text, Heading } from "@radix-ui/themes";

import Textbox from "@/components/Textbox";
import PasswordBox from "@/components/PasswordBox";

export default function Login() {
    
    return (    
        <Theme accentColor="cyan"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius='large'>
            <Grid rows='9' columns="1" gap='3' top='auto' bottom='100%' height='100%'> 
                <Heading align="center" size="7">Login</Heading>
                <Flex direction="column" gap="3" align="center" width="100%" height="100%">
                    <Textbox width='50%' placeholder='Enter your Username...' />
                    <PasswordBox width='50%' placeholder='Enter your Password...' />
                </Flex>
            </Grid>
        </Theme>
    )
}