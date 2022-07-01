import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import QuestionDisplayCard from '../components/QuestionDisplayCard'
import { LottieCom } from '../components/SmallerComps'
// import { Player, Controls } from '@lottiefiles/react-lottie-player';

const KnowledgePage = () => {
  return (
    <>
    <Box flex={6} p={{ xs: 0, md: 2 }}>
        <Stack direction='row'>
            <Box flex={3} sx ={{mr:5}}>
                <QuestionDisplayCard />
            </Box>

            <Box flex={3}>
                <Stack direction='column'>

                  <Stack direction='row' justifyContent="space-around">
                      <Box flex={2}>
                        <Typography fontWeight={600} color="#52a1de" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '70px' }}>
                          Question List
                        </Typography>


                      </Box>
                    <Box sx={{right:0}}>
                      <LottieCom sourceLink = "https://assets4.lottiefiles.com/packages/lf20_hz4zkrb4.json"/>
                    </Box>

                  </Stack>

                  <Box flex = {3}>
                      question list
                    </Box>

                </Stack>
            </Box>

        </Stack>
    </Box>
    </>
  )
}

export default KnowledgePage