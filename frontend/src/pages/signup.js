import React from "react";
import { useState } from "react";
import '@radix-ui/themes/styles.css';
import { Flex, Grid, Theme, Text, Heading, ThemePanel, Button, Box } from "@radix-ui/themes";
import Link from "next/link";
import Textbox from "@/components/input/Textbox";
import PasswordBox from "@/components/input/PasswordBox";
import api from "./api/api";

export default function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '', checkPassword: ''});

    // function createUser() {
    //     if (typeof window !== "undefined") { // because we don't want to reference document on server side
    //         const username = document.getElementById('usernameField').value;
    //         console.log(username);
    //     }
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('name:'+name);
        console.log('value:'+value);
        setFormData({ ...formData, [name]: value });
    };

    const usernameField = <Textbox placeholder='Enter your username...' id='usernameField' name='username' padding='30px' onChange={handleChange}/>;
    const passwordField = <PasswordBox placeholder='Enter your password...' id='passwordField' name='password' onChange={handleChange}/>;
    const passwordCheckField = <PasswordBox placeholder='Re-enter your password...' id='passwordCheckField' name='checkPassword' onChange={handleChange}/>;

    const handleSignup = async () => {
        try {
            if (formData.password !== formData.checkPassword) {
                // TODO: warn user
                return;
            }
            const response = await createUser({username: formData.username, password: formData.password});
            localStorage.setItem('username', formData.username);
            console.log('User created:', response);
            window.location.href = "./main";
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const createUser = async (userData) => {
        try {
            console.log(localStorage);
            const response = await api.post('signup/', userData);
            localStorage.setItem('access_token', response.data.access_token);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    };

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      }, (error) => {
            return Promise.reject(error);
    });

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
                    <Button onClick={() => handleSignup()}>Sign Up</Button>
                </Flex>
            </Grid>
        </Theme>
    )
}