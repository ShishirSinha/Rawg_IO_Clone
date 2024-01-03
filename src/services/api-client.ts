import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd21ca0f5ffb94638883efa5ea42c94dd'
  }
})