import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { isArray } from "lodash";
import { motion, animate, stagger } from "framer-motion";
import { useEffect } from "react";

function PostsSection({ postsData, handlePost }) {
  useEffect(() => {
    if (postsData.length) {
      animate(
        ".postcard",
        { y: [-50, 0], opacity: [0, 1], filter: ["blur(5px)", "blur(0px)"] },
        {
          delay: stagger(0.1),
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 2,
        }
      );
    }
  }, [postsData]);
  return (
    <>
      <CreatePost handlePost={handlePost} />
      <div className="flex flex-col gap-y-4">
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
            return (
              <motion.div
                key={post.author}
                // initial="offscreen"
                // whileInView="onscreen"
                // viewport={{ once: true, amount: 0.8 }}
                className="postcard"
              >
                <PostCard key={post.author} {...postData} />
              </motion.div>
            );
          })}
      </div>
    </>
  );
}

export default PostsSection;
