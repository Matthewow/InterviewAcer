import axios from "axios";


export const postHeader = {
    'Content-Type': 'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
};
  
export const fetchData = async (suburl) => {
  const url = process.env.REACT_APP_SERVER_ADDRESS + suburl
  const res = await fetch(url, {postHeader,});
  const data = await res.json();
  return data;
};

  