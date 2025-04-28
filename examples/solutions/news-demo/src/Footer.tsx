import React, {ReactChildren} from 'react';

interface FooterProps {
  children: ReactChildren
}

export const Footer = (props :FooterProps) => {
  return (
    <footer>
      { props.children }
      <p>Written with pride with <a href="http://facebook.com/react">React</a></p>
    </footer>
  )
}