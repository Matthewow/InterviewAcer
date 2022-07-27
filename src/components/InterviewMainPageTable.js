import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#261c94',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function InterviewMainPageTable({data}) {
    let navigate = useNavigate();

    console.log('====================================');
    console.log(data);
    console.log('====================================');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Upload Date</StyledTableCell>
            <StyledTableCell> Company </StyledTableCell>
            <StyledTableCell> Location </StyledTableCell>
            <StyledTableCell> Position </StyledTableCell>
            <StyledTableCell> Level</StyledTableCell>
            {data.interviewList && data.interviewList[0].questions.queryInfo ?  <StyledTableCell> # Questions</StyledTableCell> : <></>}
            <StyledTableCell> Provider</StyledTableCell>
            <StyledTableCell> </StyledTableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {data.interviewList?.map((item) => (
            <StyledTableRow key={item.interviewId} >
              <StyledTableCell component="th" scope="row">
                {`${item.uploadTime.substring(0, 10)}`}
              </StyledTableCell>
              <StyledTableCell>{item.company}</StyledTableCell>
              <StyledTableCell>{item.location}</StyledTableCell>
              <StyledTableCell>{item.position}</StyledTableCell>
              <StyledTableCell>{item.level}</StyledTableCell>
              {item.questions.queryInfo ?  <StyledTableCell>{item.questions.queryInfo.totalRecord}</StyledTableCell> : <></>}
              <StyledTableCell>{item.userName}</StyledTableCell>
              <StyledTableCell><Button variant='outlined' onClick={()=>{
                navigate('/single_interview', { state: item.interviewId });
            }}>more</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
