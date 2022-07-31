/*
React.useEffect(() => {
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/job_service/load/`, requestBody, {
    headers: postHeader(token)
  })
  .then(res => {
    if (res.status === 200) {
      if (res.data.code === '00') {
        setJobs(res.data.data.entities);
        setToken(res.data.token);
      }
      else if ((res.data.code === '97' || (res.data.code === '98')))
        navigate('/signin')
    }
  })
}, []);


{token, setToken}

token = {token} setToken = {setToken}

let navigate = useNavigate();
useEffect(() => {
    if (token === "")
      navigate('/signin')
}, [token]);


${process.env.REACT_APP_SERVER_ADDRESS}

*/