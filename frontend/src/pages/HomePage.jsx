import { Post } from "../Components/Post.jsx";
import { Search } from "../components/Search.jsx";
import mockData from "../data.js";

import { useState } from "react";

function HomePage() {
  let [data, setData] = useState(mockData);
  const [username, setUsername] = useState("");
  function handleSearch() {}
  function handleChange(e) {
    setUsername(e.target.value);
  }
  return (
    <div>
      <Search
        name={"bob"}
        handleSearch={handleSearch}
        handleChange={handleChange}
        setUsername={setUsername}
      />
      <div className="posts-box">
        {data.map((post, index) => {
          //use id when availanle
          return (
            <div>
              <Post post={post} index={index} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
