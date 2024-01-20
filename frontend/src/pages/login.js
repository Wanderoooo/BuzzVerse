import React from "react";
import '@radix-ui/themes/styles.css';
import { Box, Flex, Grid, Theme, Text, Heading, Button } from "@radix-ui/themes";
import { useState } from "react";

import Textbox from "@/components/input/Textbox";
import PasswordBox from "@/components/input/PasswordBox";
import Link from "next/link";

import api from "./api/api";


export default function Login() {

    const [formData, setFormData] = useState({ username: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const usernameField = <Textbox width='50%' id='usernameField' name='username' placeholder='Enter your Username...' onChange={handleChange}/>;
    const passwordField = <PasswordBox width='50%' id='passwordField' name='password' placeholder='Enter your Password...' onChange={handleChange}/>;
    console.log(formData);

    const signInUser = async (loginData) => {
        try {
          const response = await api.post('login/', loginData);
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('username', formData.username);
          window.location.href = "./main";
          return response.data;
        } catch (error) {
          console.error('Error signing in user:', error);
          throw error;
        }
    };

    const handleLogin = async () => {
        try {
          const response = await signInUser(formData);
          console.log('User signed in:', response);
        } catch (error) {
          console.error('Error:', error);
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
        <Theme accentColor="cyan"
        grayColor="gray"
        panelBackground="translucent"
        scaling="100%"
        appearance="dark"
        radius='large'
        hasBackground='true'>
            <Grid rows="5"> 
                <Box align='right' p='3'>
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
                    <Button width="50%" onClick={() => handleLogin()}>Log In</Button>
                </Flex>
            </Grid>
        </Theme>
    )
}