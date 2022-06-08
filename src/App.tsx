import React from "react";
import "../src/styles/App.css";
import CommentCard from "./Components/CommentCard";
import Comments from "./Components/Comments";
import data from "./Data/data.json";

function App() {
  return (
    <div className="bg-indigo-100 h-screen p-6">
      {/* <CommentCard></CommentCard> */}
      {data.comments.map((comment) => {
        return (
          <Comments
            content={comment.content}
            createdAt={comment.createdAt}
            user={comment.user}
          />
        );
      })}
    </div>
  );
}

export default App;
