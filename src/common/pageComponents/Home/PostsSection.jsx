import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { isArray } from "lodash";

function PostsSection({ postsData, handlePost }) {
  return (
    <>
      <CreatePost handlePost={handlePost} />
      {isArray(postsData) &&
        !!postsData.length &&
        postsData?.map((post) => {
          const postData = {
            author: post.author,
            description: post.description,
            emoji: post.emoji,
            commentsCount: post.commentsCount,
            postedOn: post.postedOn,
            profileImg: post.profileImg,
          };
          return <PostCard key={post.author} {...postData} />;
        })}
    </>
  );
}

export default PostsSection;
