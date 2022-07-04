export const postHeader = {
    'Content-Type': 'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
};
  
export const fetchData = async (suburl, options) => {
  const url = 'http://120.77.98.16:8080' + suburl
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
  