import React from "react";

export default function Comments({comments}){
    const renderedComments = comments.map((com)=>{
        return (
            <div>
                <h2>{com.user}</h2>
                <p>{com.comment}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>{comments.length} Comments</h1>
            {renderedComments}
        </div>
    )
}