import axios from "axios";


export const postHeader = {
    'Content-Type': 'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDc5MzEyLCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.j3fxGfYyRhKB1o7DnNIm0-QczvO0fLS5rF5FfnkGIrI'
};
  
export const fetchData = async (suburl) => {
  const url = process.env.REACT_APP_SERVER_ADDRESS + suburl
  const res = await fetch(url, {postHeader,});
  const data = await res.json();
  return data;
};

  