import React from 'react';

interface CopyrightProps {
  date :Date;
}

export const Copyright = (props: CopyrightProps) => {
  const { date } = props;
  return (
    <p>
      Copyright &copy; us.com, {date.toDateString()} All rights reserved.
    </p>
  )
}