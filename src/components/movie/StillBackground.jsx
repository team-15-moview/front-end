import React from 'react'
import { StillContainer } from './style'

function StillBackground({src}) {
  return (
    <StillContainer>
      <img alt="Movie StillCut"src={src} width='100%'/>
    </StillContainer>
  )
}

export default StillBackground