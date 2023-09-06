import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Theme, Text, Heading } from "@radix-ui/themes";
import { EyeOpenIcon, EyeNoneIcon} from '@radix-ui/react-icons'
import Textbox from "@/components/Textbox";

export default function Login() {
    const [passwordViewable, setPasswordViewable] = React.useState(false);

    function changeViewable() {
        setPasswordViewable(passwordViewable => !passwordViewable)
    }

    function viewableToString(viewable) {
        if (viewable) {
            return '';
        }
        return 'password';
    }

    function viewableToIcon(viewable) {
        if (viewable) {
            return <EyeNoneIcon onClick={changeViewable} />;
        }
        return <EyeOpenIcon onClick={changeViewable} />
    }

    return (
        
        <Theme>
            <Grid rows="2">
                <Heading align="center" size="7">Login</Heading>
                <Flex direction="column" gap="3" align="center" width="100%">
                    <Textbox width='50%' placeholder='Enter your Username...' />
                    <Textbox width='50%' placeholder='Enter your Password...' 
                        type={viewableToString(passwordViewable)} rightIcon={viewableToIcon(passwordViewable)} />
                </Flex>
            </Grid>
        </Theme>
    )
}