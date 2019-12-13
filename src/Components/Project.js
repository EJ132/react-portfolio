import React from 'react'

export default function Project(props){
    return (
        <li>
            <h2>{props.title}</h2>
            <p><span className='bold'>Front-End: </span>{props.front}</p>
            <p><span className='bold'>Back-End: </span>{props.back}</p>
            <p>{props.details}</p>
            <img src={props.img} alt={props.title}/>
            <div className='btn_div'>
                <a className='btn' target='_blank' rel="noopener noreferrer" href={props.live}>Live</a>
                <a className='btn' target='_blank' rel="noopener noreferrer" href={props.repo}>Repo</a>
            </div>
        </li>
    )
}