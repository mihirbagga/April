import React,{useState} from 'react'
import faker from 'faker'
import { IconButton } from '@material-ui/core'


const Jackdaw =(props)=>
{ var [likes,setlikes]=useState(0)
    var handleclick=()=>
    {
        setlikes(likes+1)
    }
    return(
        
            <div className="comment">
            <a href="/" className="avatar">
             <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
            <a href="/" className="author">
            {faker.name.firstName() + " " +faker.name.firstName()}
            
            </a>
            <div className="metadata">
                <span className="date">{props.day},{props.time} </span>

                <button class="mini ui button">Follow</button>
            </div>
            <div className="text">{props.text}</div>
            </div>
            <IconButton onClick={handleclick}>
            <i class="heart icon"></i> {likes}
            </IconButton>
            </div>
            
    )
}
export default Jackdaw