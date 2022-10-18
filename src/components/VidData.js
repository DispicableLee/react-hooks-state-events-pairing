import React, {useState} from "react";

export default function VidData(props){
    return (
        <div>
            <small>{props.views} Views | {props.createdAt}</small>
            <br></br>
            <button onClick={props.upvoteHandler}>
                {props.upvotes} 👍</button>
            <button onClick={props.downvoteHandler}>
                {props.downvotes} 👎</button>
            <br/>
            <button onClick={props.buttonHandler}
                    name={props.buttonText}
                >
                {props.buttonText}</button>
        </div>
    )
}