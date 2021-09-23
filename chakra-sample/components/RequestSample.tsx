import {Box, Button} from "@chakra-ui/react";
import axios from '../lib/axios'

const BASE_PATH = 'http://localhost:3000';
// const BASE_PATH = 'http://localhost:3000';

export const RequestSample = () => {


  return (
    <Box>
      <Button onClick={login}>Login</Button>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={fetchUser}>fetchUser</Button>
      <Button onClick={get}>GET /api/posts</Button>
      <Button onClick={post}>POST /api/posts</Button>
      <Box>
      </Box>
    </Box>
  )
}

const login = async () => {
  const response = await axios.post(`${BASE_PATH}/sessions`);
  console.log(response);
}

const logout = async () => {
  const response = await axios.delete(`${BASE_PATH}/sessions`);
  console.log(response);
}

const fetchUser = async () => {
  const response = await axios.get(`${BASE_PATH}/sessions`);
  console.log(response.data)
}

const get = async () => {
  const response = await axios.get(`${BASE_PATH}/api/posts`);
  console.log(response);
}

const post = async () => {
  const response = await axios.post(`${BASE_PATH}/api/posts`, { title: 'hoge'});
  console.log(response);
}

const refreshCSRFToken = async () => {
  await fetchUser();
}