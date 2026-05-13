import { TextInput } from '@mantine/core';
import { useState } from 'react';
import { Stack } from '@mantine/core';
import { Button } from '@mantine/core';
import Service from '../../utils/http';
import { useEffect } from 'react';
import { Container } from '@mantine/core';
import { Text } from '@mantine/core';

const UrlShortener = () => {
  const service = new Service();  
  const [data, setData] = useState({});
  const [shortUrl, setShortUrl] = useState('');
  const handleSubmit = async () => {
       try {
           console.log(data);
           const response = await service.post("s", data);  
           setShortUrl(`https://url-shortener-bootcamp.onrender.com/api/s${response.shortCode}`);
           console.log(response.shortCode);
       } catch (error) {
           console.error("POST API call failed!", error.message);
       }
   };
     useEffect(() => {
       console.log(`Short URL is ${shortUrl}`);
   }, [shortUrl]);
  return (
    <>
    { shortUrl && shortUrl.length>0 ? <p>{shortUrl}</p> :
    <Container>
    <Stack>
      <Text
      size="xl"
      fw={900}
      ta="center"
      variant="gradient"
      gradient={{ from: 'blue', to: 'indigo', deg: 189 }}
    >
      Shorten Your URL
    </Text>
       <TextInput
      label="Original URL"
      withAsterisk
      onChange ={(event) => {setData({...data, originalUrl: event.target.value})}}
      placeholder="Enter the Original URL"
    />
    <TextInput
      label="Customize your link ( Optional )"
      onChange ={(event) => setData({...data, customUrl: event.target.value})}
      placeholder="Customize your url"
    />
    <TextInput
      label="Title ( Optional )"
      onChange ={(event) => setData({...data, title: event.target.value})}
      placeholder="Enter a title for your url"
    />
    <Button variant="outline" onClick={handleSubmit}>
      Generate Short URL
    </Button>
    </Stack>
     </Container>
  }
    </>
  )
}

export default UrlShortener
