import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/74055218?v=4"
        message="Hello World"
        timestamp="Timestamp"
        username="GauravAgarwal"
        image="https://avatars.githubusercontent.com/u/74055218?v=4"
      />
    </div>
  );
}

export default Feed;
