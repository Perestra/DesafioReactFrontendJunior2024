import React from 'react'
import style from './Title.module.scss'

type Props = {
    title: string
}

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <h1 className={ style.title }>{title}</h1>
  )
}