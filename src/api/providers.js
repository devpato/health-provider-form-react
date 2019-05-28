import axios from 'axios';

export default axios.create({
  baseURL:
    'https://p2pqluc1s5.execute-api.us-east-1.amazonaws.com/providers-api'
});
