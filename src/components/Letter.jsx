import React from 'react'
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

export default function Letter({letterPos, attemptVal}) {
  const { board } = useContext(AppContext)
  const letter = board[attemptVal][letterPos];

  return (
    <div className="letter">{letter}</div>
  )
}
