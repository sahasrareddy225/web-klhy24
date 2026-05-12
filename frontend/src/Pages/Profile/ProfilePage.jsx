import React from 'react'
import Service from '../../utils/http';
import { useState } from 'react';
import { useEffect } from 'react';
import { Avatar, Container, Loader, Stack, Text } from '@mantine/core';

export default function ProfilePage() {
    const service = new Service();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchUser = async () => {
      try {
        const res = await service.get("user/me");
        setUser(res);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    };
    useEffect(
        () => { fetchUser() }, []
    );
    if (loading) {
         return <Loader color="grape" type="dots" />;
    }
    if (!user) {
     return <div>User not found</div>   
    }
        return (
 <Container>
            <Stack
                h={300}
                bg="var(--mantine-color-body)"
                align="center"
                justify="center"
                gap="lg"
            >
                <Avatar src={user.avatar} size={150} radius={150} alt="it's me" />
                <Text> {user.name}</Text>
                <Text> {user.email}</Text>
                <Text> {new Date(user.createdAt).toLocaleDateString()}</Text>
            </Stack>
        </Container>
    
    )
}


