import React from 'react'

export default function Footer({props}) {
    const mode= props
    
  return (
    <footer className={mode ? 'light-nav' : 'dark-nav'}>
        Footer
        </footer>
  )
}
