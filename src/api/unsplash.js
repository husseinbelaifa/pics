import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 006a9bd981f4dcf8556edce0153b6bce6c5094c009970fb901cb328f9fb78b55"
  }
});
