import { Button, Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import axios from 'axios';
import { postHeader } from "../utils/fetchData";
import { LoadingAnimation } from '../components/SmallerComps';
import { ProgrammingHistoryItem } from '../components/KnowledgeListItem';
import {useLocation, useNavigate} from 'react-router-dom';

const ProgrammingQuestionPage = ({token, setToken}) => {
    let navigate = useNavigate();
    React.useEffect(() => {
        if (token === "")
            navigate('/signin')
    }, [token]);

    const questionContent = useLocation().state;

    const [judgeResult, setJudgeResult] = React.useState({
        "uuid": "",
        "userId": "123@qq.com",
        "questionId": 1,
        "uploadedCode": "public class Solution{\npublic int[] twoSum(int[] nums, int target) {\nMap<Integer, Integer> hashtable = new HashMap<Integer, Integer>();\nfor (int i = 0; i < nums.length; ++i) {\nif (hashtable.containsKey(target - nums[i])) {\nreturn new int[]{hashtable.get(target - nums[i]), i};\n}hashtable.put(nums[i], i+1);}\nreturn new int[0];}\n}",
        "uploadTime": "2022-07-16T10:09:29.000+00:00",
        "stdout": null,
        "stderr": null,
        "status": "Rejected",
        "failedCases": [
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
            }
        ],
        "message": "Test case not passed."
    }); 

    const [code, setCode] = React.useState(questionContent.prepareCode);
    const [pageState, setPageState] = React.useState('coding');
    const [historyData, setHistoryData] = React.useState([]);
    const [resultCheckInfo, setResultCheckInfo] = React.useState({'id':'', 'waitingTime':''});
    

    const handleSubmit = () =>{

        const requestBody = {
            "questionId": questionContent.id,
            "codes": code,
            "lang": "Java"
        }

        axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/programming_service/judgement/`, requestBody, {
            headers: postHeader(token)
        })
        .then(res => {
            if (res.status === 200) {

                if (res.data.code === '00') {
                    setPageState('waiting')
                    setResultCheckInfo({'id':res.data.data.uuid, 'waitingTime':res.data.data.waitMinutesToRequest})
                    setToken(res.data.token);
                }
            }
        })
    }

    React.useEffect(() => {
        if(resultCheckInfo.id !== ''){
            const timer = setTimeout(() => {
                axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/programming_service/one_history?uuid=${resultCheckInfo.id}`, {
                    headers: postHeader(token)
                    })
                .then(res => {
                    if (res.status === 200) {
                        setJudgeResult(res.data.data)
                    }
                })
              }, 2500);

              axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/programming_service/all_history?questionId=${questionContent.id}`, {
                    headers: postHeader(token)
                    })
                .then(res => {
                    if (res.status === 200) {
                        setHistoryData(res.data.data.historyRecord)
                    }
                })

              return () => clearTimeout(timer);
        } 
    }, [resultCheckInfo]);

    React.useEffect(() => {
        if(judgeResult.uuid !== "")
            setPageState('judged')
    }, [judgeResult]);

    
    const renderSwitch = (param) => {
        switch(param) {
            case 'Easy':
            case '1':
            case 'Accecpted':
                return 'green';
            case 'Medium':
            case '0':
                return 'DarkOrange';
            case 'Hard':
            case '2':
                return 'red';
            default:
                return 'red';
        }
      }
      if (pageState !== 'judged'){
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

                    <Box flex={4} p={2} height="100vh" display="flex" flexDirection="column">
                    
                        {pageState === 'waiting'?
                        <>
                            <LoadingAnimation/>
                        </>:
                        <>
                        
                            <Stack 
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <FormControl>
                                    <Select
                                        value={10}
                                        displayEmpty
                                    >
                                    <MenuItem value={10}>Java</MenuItem>
                                    </Select>
                                <FormHelperText>We only support Java as the programming language at this moment.</FormHelperText>
                                </FormControl>

                                <Button variant='text' size='small' onClick={()=>{setCode(questionContent.prepareCode)}}>Restore default</Button>
                            </Stack>

                            <Box sx={{my:3}}>
                                <CodeEditor
                                    value={code}
                                    language="java"
                                    onChange={(evn) => setCode(evn.target.value)}
                                    padding={15}
                                    minHeight='400px'
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: 16,
                                        backgroundColor: "#000",
                                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                    }}
                                />
                            </Box>
                            <Button variant='contained' color='success' onClick={handleSubmit}>submit</Button>

                        </>}
  
                    </Box>
                </Stack>
            </>
        )
    }
    else{
        return (
            <>
                <Stack direction="row" spacing={2} justifyContent="space-between" sx={{m: 5}}>
                    <Box flex={3} p={2} height="100vh" display="flex" flexDirection="column">

                            <Stack direction='row' alignItems="flex-end" justifyContent="flex-start"  spacing={3}>
                                <Typography variant='h4'> {`${questionContent.id}.${questionContent.title}`}</Typography>
                                <Button 
                                    variant='outlined' 
                                    color = "success" 
                                    size='small'
                                    onClick={()=>{
                                        setPageState('coding')
                                    }}
                                >
                                    Back to Question</Button>
                            </Stack>

                            <Divider sx={{mt:1}}/>

                        <Box  sx={{mt:3}}>


                            <Stack direction='row' alignItems="flex-end" justifyContent="space-between">
                                <Typography variant="h6" color = {judgeResult.status === 'Accepted' ? 'green' : "red"}>
                                    {`${judgeResult.status}` }
                                </Typography>

                                <Typography variant="body2" color = "grey">
                                    {`${judgeResult.uploadTime.substring(0, 10)} ${judgeResult.uploadTime.substring(11, 19)}` }
                                </Typography>
                            </Stack>

                            <Typography variant="h6" color = "#666">
                                Your Submission:
                            </Typography>
                            
                            <Box>
                                <CodeEditor
                                    value={judgeResult.uploadedCode}
                                    disabled
                                    language="java"
                                    padding={15}
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: 16,
                                        backgroundColor: "#000",
                                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                    }}
                                />
                            </Box>
                        </Box>
                        
                        {
                            judgeResult.stderr?
                            <>
                            <Typography sx={{m:2}} variant="caption"
                            style={{ display: "inline-block", whiteSpace: "pre-line" }}>{judgeResult.stderr}</Typography>
                            </>
                            :<></>
                        }

                        {
                        (judgeResult.failedCases && judgeResult.failedCases.length !== 0 && judgeResult.status !== "Accepted") ?
                        <>
                        <Box sx={{mt:2}} >
                            <div data-color-mode="light">
                                <div className="wmde-markdown-var"> </div>
                                <MDEditor.Markdown
                                    source={`
    Failed case: ${judgeResult.failedCases[0].param1} 
    Excepted: ${judgeResult.failedCases[0].param2}
    Message: ${judgeResult.message}`}
                                    linkTarget="_blank"/>
                            </div>
                        </Box>
                        
                        </>
                        :
                        <></>
                        }
                       

                    </Box>

                    <Divider orientation="vertical" flexItem/>

                    <Box flex={3} p={2} height="100vh" display="flex" flexDirection="column">
                    
                        <Typography variant='h4' color="#888">Your Submission History</Typography>
                        <Stack direction="column" spacing={1} sx={{mt:2}}>
                            {historyData?.map((item) => (
                                <>
                                <ProgrammingHistoryItem item = {item} key = {item.uuid}/>
                                </>
                            ))}
                        </Stack>
  
                    </Box>

                </Stack>
            </>
        )

    }
}

export default ProgrammingQuestionPage