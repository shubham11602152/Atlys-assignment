import React from "react";
import CenteredLayout from "../../common/layouts/CenteredLayout";
import PostsSection from "../../common/pageComponents/Home/PostsSection";
import LoginModal from "../../common/pageComponents/Home/LoginModal";

function Home() {
  const [open, setOpen] = React.useState(false);
  const [postsData, setPostData] = React.useState([]);

  React.useEffect(() => {
    async function fetchPosts() {
      const data = await fetch("/data/posts.json").then((res) => res.json());
      setPostData(data);
    }
    fetchPosts();
  }, []);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    handleModalOpen();
  };

  return (
    <CenteredLayout>
      <h1 className="text-[28px] text-neutral font-medium mb-2">Hello Jane</h1>
      <p className="text-light mb-10">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>

      <div className="flex flex-col gap-y-4">
        <PostsSection postsData={postsData} handlePost={handlePost} />
      </div>
      <LoginModal open={open} onClose={handleModalClose} />
    </CenteredLayout>
  );
}

export default Home;
