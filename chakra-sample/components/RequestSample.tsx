import {Box, Button} from "@chakra-ui/react";
import axios from '../lib/axios'

export const RequestSample = () => {
  return (
    <Box>
      <Button onClick={get}>GET /api/posts</Button>
      <Button onClick={post}>POST /api/posts</Button>
      <Box>
      </Box>
    </Box>
  )
}

const get = async () => {
  const response = await axios.get('http://localhost:3000/api/posts');
  console.log(response);
}

const post = async () => {
  const response = await axios.post('http://localhost:3000/api/posts', { title: 'hoge'});
  console.log(response);
}