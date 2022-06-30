import { Box, Stack } from '@mui/material'
import React from 'react'
import QuestionCard2 from '../components/QuestionCard2'

const KnowledgePage = () => {
  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Stack direction='row'>
            <Box flex={3} sx ={{mr:5}}>
                <QuestionCard2 />
            </Box>

            <Box flex={3}>
                Right display card list
            </Box>

        </Stack>
    </Box>
    </>
  )
}

export default KnowledgePage