import { Button } from '@mui/material'
import React from 'react'
import { InterviewPreviewItem } from './components/KnowledgeListItem'
// import { fetchData } from './utils/fetchData'


const Test = () => {

  const postHeader = {
    'Content-Type': 'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
};

  const fetchData = async (suburl) => {
    const url = process.env.REACT_APP_SERVER_ADDRESS + suburl
    const res = await fetch(url, {postHeader,});
    const data = await res.json();
    return data;
  };
  
  const test_f = () => {

    let suburl = '/knowledge_service?uuid=2f88b7c85ce24599baa75f2ba5f69c96'

    const fetchExercisesData = async () => {
      const data = await fetchData(suburl);
      console.log('====================================');
    console.log(process.env.REACT_APP_SERVER_ADDRESS, data);
    console.log('====================================');
    };

    fetchExercisesData();
  }

  return (
    <Button onClick={test_f}>test</Button>
  )
}

export default Test