import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const LottieCom = (props) => {
  return (
    <>
        <Player
            autoplay
            loop
            src={props.sourceLink}
            style={{ height: props.height ? props.height : "300px", width: props.width ? props.width : '300px'}}
        >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </>
  )
}

export const LoadingAnimation = () => {
  return(
    <>
    <LottieCom sourceLink = 'https://assets3.lottiefiles.com/private_files/lf30_ipvphpwo.json' height = '800px' width = '400px'/>
    </>
  )
}


