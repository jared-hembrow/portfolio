import React, { FC } from 'react'
import style from "./cards.module.css"
import config from "../../next.config";
import Image from 'next/image';
import { Icon, SemanticICONS } from 'semantic-ui-react';
import Link from 'next/link';

export type CardProps = {
    title: string
    description: string
    imageUrl: string 
    links: {
        icon?: SemanticICONS
        linkText?: string;
        linkUrl: string
    }[]
}

const Card: FC<CardProps> = ({
    title,
    description,
    imageUrl,
    links
}) => {
  return (
    <article className={style['card']}>
        <header className={style['card-header']}>
            <h2>{title ? title : ""}</h2>
        </header>
        <div className={style['card-image']} >
            <Image alt={`${title}-description`} src={imageUrl} width={220} height={160} />
        </div>
        <div className={style['card-description']}>
            <p className={style['card-description-text']}>{description}</p>
        </div>
        <div className={style['card-links']}>
            {links.map(link => {
                return <div className={style['card-link']}>
                    <Link href={link.linkUrl}>{link.linkText ? (<div className={style['card-link-text']}>{link.linkText}</div>) : link.icon ? <Icon size="huge" name={link.icon} className={style['card-link-icon']} />  : null}</Link>
                </div>
            })}
        </div>
    </article>
  )
}

export default Card