import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Text } from "@radix-ui/themes";

export default function Test() {

    return (
        <Grid columns="3" gap="3">
        <Flex direction="column" gap="3">
            <Box height="5">
            <Text> Hi </Text>
            </Box>
            <Box height="7">
                <Text> Hi </Text>
            </Box>
            <Box height="9">
                <Text> Hi </Text>
            </Box>
        </Flex>
        <Flex direction="column" gap="3">
            <Box grow="1">
                <Text> Hi </Text>
            </Box>

            <Box height="6">
                <Text> Hi </Text>
            </Box>
        </Flex>
        </Grid>
    )

}
