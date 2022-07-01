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

