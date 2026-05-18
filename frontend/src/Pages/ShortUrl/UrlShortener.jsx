import { TextInput, Button, Container, Stack, Text, Group, CopyButton } from '@mantine/core';
import { useState, useEffect } from 'react';
import Service from '../../utils/http';

const UrlShortener = () => {
  const service = new Service();
  const [data, setData] = useState({});
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await service.post("s", data);
      const base = service.getBaseURL();
      setShortUrl(`${base}/api/s/${response.shortCode}`);
    } catch (error) {
      console.error("POST API call failed!", error.message);
    }
  };

  useEffect(() => {
    console.log(`Short URL is ${shortUrl}`);
  }, [shortUrl]);

  return (
    <>
      {shortUrl && shortUrl.length > 0 ? (
        <Container mt="xl">
          <Stack align="center">
            <Text size="xl" fw={700} ta="center">Your Short URL is Ready!</Text>

            <Text
              component="a"
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              c="blue"
              style={{ wordBreak: 'break-all', textAlign: 'center' }}
            >
              {shortUrl}
            </Text>

            <Group>
              <CopyButton value={shortUrl}>
                {({ copied, copy }) => (
                  <Button variant="outline" color={copied ? 'teal' : 'blue'} onClick={copy}>
                    {copied ? 'Copied!' : 'Copy Link'}
                  </Button>
                )}
              </CopyButton>

              <Button variant="subtle" onClick={() => setShortUrl('')}>
                Shorten Another
              </Button>
            </Group>
          </Stack>
        </Container>
      ) : (
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
              onChange={(event) => setData({ ...data, originalUrl: event.target.value })}
              placeholder="Enter the Original URL"
            />
            <TextInput
              label="Customize your link ( Optional )"
              onChange={(event) => setData({ ...data, customUrl: event.target.value })}
              placeholder="Customize your url"
            />
            <TextInput
              label="Title ( Optional )"
              onChange={(event) => setData({ ...data, title: event.target.value })}
              placeholder="Enter a title for your url"
            />
            <Button variant="outline" onClick={handleSubmit}>
              Generate Short URL
            </Button>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default UrlShortener;