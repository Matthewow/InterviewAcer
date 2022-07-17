import { Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';

const ProgrammingQuestionPage = () => {

    const questionContent = {
        "id": 1,
        "title": "Two sum",
        "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\r\n\r\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\r\n\r\nYou can return the answer in any order.\r\n\r\n \r\n\r\n**Example 1:**\r\n\r\n```\r\nInput: nums = [2,7,11,15], target = 9\r\nOutput: [0,1]\r\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\r\n```\r\n\r\n\r\n\r\n**Example 2:**\r\n\r\n```\r\nInput: nums = [3,2,4], target = 6\r\nOutput: [1,2]\r\n```\r\n\r\n**Example 3:**\r\n\r\n```\r\nInput: nums = [3,3], target = 6\r\nOutput: [0,1]\r\n```",
        "level": "Easy",
        "testCases": [
            {
                "param1": [
                    2,
                    7,
                    11,
                    15
                ],
                "param2": 9,
                "param3": null,
                "param4": null,
                "param5": null
            },
            {
                "param1": [
                    3,
                    2,
                    4
                ],
                "param2": 6,
                "param3": null,
                "param4": null,
                "param5": null
            }
        ],
        "prepareCode": "public class Solution {\r\n    public int[] twoSum(int[] nums, int target) {\r\n\r\n    }\r\n}",
        "defaultMethodName": "",
        "returnType": null,
        "paramLen": null,
        "paramTypes": "",
        "testNum": null,
        "isPassed": 2
    }

    const [code, setCode] = React.useState(questionContent.prepareCode);

    const renderSwitch = (param) => {
        switch(param) {
            case 'Easy':
            case '1':
                return 'green';
            case 'Medium':
            case '0':
                return 'DarkOrange';
            case 'Hard':
            case '2':
                return 'red';
        }
      }

  return (
    <>
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{m: 5}}>
            <Box flex={3} p={2} height="100vh" display="flex" flexDirection="column">
                <Stack direction='column' spacing={1}>       
                    <Typography variant='h4'> {`${questionContent.id}.${questionContent.title}`}</Typography>
                    <Typography variant="h6" color = {renderSwitch(questionContent.level)}>
                        {questionContent.level}
                    </Typography>
                </Stack>
                <Box sx={{mt:2}}>
                <div data-color-mode="light">
                    <div className="wmde-markdown-var"> </div>
                    <MDEditor.Markdown
                        source={questionContent.description}
                        linkTarget="_blank"/>
                </div>
                </Box>

            </Box>

            <Divider orientation="vertical" flexItem/>

            <Box flex={3} p={2} height="100vh" display="flex" flexDirection="column">

            <FormControl>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    <MenuItem value={10}>Java</MenuItem>
                </Select>
            </FormControl>
            
            <Box>
            <CodeEditor
                value={code}
                language="js"
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                minHeight='400px'
                style={{
                    fontSize: 16,
                    backgroundColor: "#111",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
            </Box>
            <Button variant='contained' color='success'>submit</Button>


                
            </Box>
        </Stack>
    </>
  )
}

export default ProgrammingQuestionPage