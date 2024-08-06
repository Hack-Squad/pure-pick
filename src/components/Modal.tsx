import React from 'react'
import ThemedBox from './ThemedBox'

function Modal({children}: {children: React.ReactNode}) {
  return (
	<ThemedBox>
		{children}
	</ThemedBox>
  )
}

export default Modal