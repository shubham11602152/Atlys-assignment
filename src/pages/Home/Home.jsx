import React from "react";
import CenteredLayout from "../../common/layouts/CenteredLayout";
import PostCard from "../../common/pageComponents/Home/PostCard";
import { isArray } from "lodash";
import PostsSection from "../../common/pageComponents/Home/PostsSection";

function Home() {
  const [postsData, setPostData] = React.useState([]);

  React.useEffect(() => {
    async function fetchPosts() {
      const data = await fetch("../../../public/data/posts.json").then((res) =>
        res.json()
      );
      setPostData(data);
    }
    fetchPosts();
  }, []);
  return (
    <CenteredLayout>
      <h1 className="text-[28px] text-neutral font-medium mb-2">Hello Jane</h1>
      <p className="text-light mb-10">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>

      <div className="flex flex-col gap-y-4">
        <PostsSection postsData={postsData} />
      </div>
    </CenteredLayout>
  );
}

export default Home;
