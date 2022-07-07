import React from 'react'
import { KnowledgeCommentItem } from './components/KnowledgeListItem'


const Test = () => {
  const displaycard ={
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
            "totalRecord": 1
        },
        "entities": [
            {
                "knowledgeCommentId": "6c52b8768cdb437ab4414baa6377b16a",
                "knowledgeId": "c626494803684d6baf1155456d0d6d5f",
                "providerId": "123@qq.com",
                "userName": "123",
                "content": "idk",
                "uploadTime": "2022-07-07T12:46:30.000+00:00",
                "lastModifiedTime": "2022-07-07T12:46:30.000+00:00"
            }
        ]
    }
}

  return (
    // <><QuestionDisplayCard questioncard = {displaycard}/></>
    <>
      <KnowledgeCommentItem data = {displaycard.comments.entities}/>
    </>
  )
}

export default Test