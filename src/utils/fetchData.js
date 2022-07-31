export function postHeader (token) {
  return {
    'Content-Type': 'application/json',
    'token': token ? token : ""
  }
};
  
export const fetchData = async (suburl) => {
  const url = process.env.REACT_APP_SERVER_ADDRESS + suburl
  const res = await fetch(url, {postHeader,});
  const data = await res.json();
  return data;
};

  