import React from 'react'
import QuestionDisplayCard from './components/QuestionDisplayCard'


const Test = () => {
  const displaycard = {
    "knowledgeId": "c626494803684d6baf1155456d0d6d5f",
    "question_content": "What is distributed system?",
    "answer_list": null,
    "userid": "123@qq.com",
    "interviewId": "6f96514800484508a147b9cc47e0d3c4",
    "userName": "123",
    "comment_list": null,
    "company": "Tencent",
    "tag": "Network",
    "uploadTime": "2022-07-06T09:09:49.000+00:00",
    "answers": {
        "queryInfo": {
            "currentPage": 1,
            "pageSize": 100,
            "totalRecord": 0
        },
        "entities": []
    },
    "comments": {
        "queryInfo": {
            "currentPage": 1,
            "pageSize": 2,
            "totalRecord": 0
        },
        "entities": []
    }
}

  return (
    <><QuestionDisplayCard questioncard = {displaycard}/></>
  )
}

export default Test