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
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvL3-2eOyS9c_sqwRmAp91NPIX2KvsyQK9qg&usqp=CAU"
        message="Guilt is worse than Greed"
        timestamp="00:01 03 Dec 2021"
        username="Tony Stark"
        image=""
      />
	  <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4tkt_lVf2qtm11aWqPN2YM0Sn3UeyiwggQ&usqp=CAU"
        message="Only those who dare to fail greatly can ever achieve greatly ~ Robert F. Kennedy"
        timestamp="00:01 03 Dec 2021"
        username="Thor"
        image=""
      />
	  <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREw3x0z-7PehZDQwvf9wN8Qv4ifvyaVPPASg&usqp=CAU"
        message="You must begin by studing the end game ~ Capablanca"
        timestamp="00:01 03 Dec 2021"
        username="Natasha"
        image=""
      />
	  <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp853oKmcxlqT6BCR5lpfZUa8_AgmuWSpu-Q&usqp=CAU"
        message="If you want something Go Get It"
        timestamp="00:01 03 Dec 2021"
        username="Groot"
        image=""
      />
    </div>
  );
}

export default Feed;
