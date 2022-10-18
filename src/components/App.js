import video from "../data/video.js";
import Comments from "./Comments.js";
import React, {useState} from "react";
import VidData from "./VidData.js";

function App() {
  console.log("Here's your data:", video);
//======================= upvotes/upvote handler ============================
  const [upvoteCount, setUpvoteCount] = useState(video.upvotes)
  function upvoteHandler(e){
    e.preventDefault()
    setUpvoteCount(upvoteCount + 1)
  }
//======================= downvotes/downvotes handler =======================
const [downvoteCount, setDownvoteCount] = useState(video.downvotes)
  function downvoteHandler(e){
    e.preventDefault()
    setDownvoteCount(downvoteCount + 1)
  }
//======================== Hide/Show commentshandler ===========================
const [buttonText, setButtonText] = useState("Hide Comments")

const [displayedComments, setDisplayedComments] = useState(video.comments)

function buttonHandler(e){
  e.preventDefault()
  if(e.target.name === "Hide Comments"){
    setButtonText("Show Comments")
    setDisplayedComments([])
  }else if(e.target.name ==="Show Comments"){
    setButtonText("Hide Comments")
    setDisplayedComments(video.comments)
  }

}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <VidData
        views={video.views}
        createdAt={video.createdAt}
        upvotes={upvoteCount}
        downvotes={downvoteCount}
        upvoteHandler={upvoteHandler}
        downvoteHandler={downvoteHandler}
        buttonText={buttonText}
        buttonHandler={buttonHandler}
          />
      <Comments
        comments={displayedComments}
      />
    </div>
  );
}

export default App;
