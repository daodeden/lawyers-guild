import React from 'react';
import { Box } from '@chakra-ui/react'
import LawyerHelp from '../features/lawyerHelp/lawyerHelp';
import MainScreen from '../features/MainScreen';
import Services from '../features/Services';

export default function Home() {
  return (
    <>
      <Box>
        <MainScreen />
        <Services/>
        <LawyerHelp />
        
      </Box>
    </>
  )
}