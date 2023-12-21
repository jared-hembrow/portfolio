import React, { FC, Fragment } from 'react'
import Card from './Card'
import {CardProps} from "./Card"
import style from "./cards.module.css"
type Props = {
    cards: CardProps[]
}

const Cards: FC<Props> = ({cards}) => {
  return (
    <section className={style['card-list']}>
        {!cards ? null : cards.map((card, index) => <Fragment key={`card-list-card-${card.title}-${index}`}><Card 
        title={card.title} 
        description={card.description} 
        imageUrl={card.imageUrl}
        links={card.links}
        /></Fragment>)}
    </section>
  )
}

export default Cards