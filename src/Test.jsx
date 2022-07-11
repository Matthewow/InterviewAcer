import React from 'react'
import { InterviewPreviewItem } from './components/KnowledgeListItem'


const Test = () => {
  const defaultQuestionData = {
    question_content: 'sdfasdf',
    tag: 'sdfsd'
}
  return (
    <div>
      <InterviewPreviewItem item = {defaultQuestionData}/>
    </div>
  )
}

export default Test