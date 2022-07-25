
export const postHeader = {
    'Content-Type': 'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjYwNTQwMDAwLCJpbmZvIjp7ImFkbWluIjoxLCJ1c2VybmFtZSI6IkFjZSBDb2RlciJ9fQ.mECkGz0aNvtBABclS_33r0Sa-gJ2Pt3lZrN7IjCUL5Y'
};
  
export const fetchData = async (suburl) => {
  const url = process.env.REACT_APP_SERVER_ADDRESS + suburl
  const res = await fetch(url, {postHeader,});
  const data = await res.json();
  return data;
};

  