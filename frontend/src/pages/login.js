import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Theme, Text, Heading } from "@radix-ui/themes";
import { EyeOpenIcon, EyeNoneIcon} from '@radix-ui/react-icons'
import Textbox from "@/components/Textbox";

export default function Login() {
    return (
        
        <Theme>
            <Grid rows="2">
                <Heading align="center" size="7">Login</Heading>
                <Flex direction="column" gap="3" align="center" width="100%">
                    <Textbox width='50%' placeholder='Enter your Username...' />
                    <Textbox width='50%' placeholder='Enter your Password...' rightIcon={<EyeNoneIcon/>}/>
                </Flex>
            </Grid>
        </Theme>
    )
}