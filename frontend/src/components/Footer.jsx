import React from 'react'

export default function Footer({props}) {
    const mode= props
    console.log(props);
  return (
    <footer className={mode ? 'light-nav' : 'dark-nav'}>
        Footer
        </footer>
  )
}
