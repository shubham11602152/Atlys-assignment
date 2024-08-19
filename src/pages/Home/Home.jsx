import React from "react";
import CenteredLayout from "../../common/layouts/CenteredLayout";
import PostsSection from "../../common/pageComponents/Home/PostsSection";
import LoginModal from "../../common/pageComponents/Home/LoginModal";

const postsData = [
  {
    author: "Oketa Fred",
    description:
      "I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
    emoji: "🥶",
    commentsCount: "24",
    postedOn: 1723968573000,
    profileImg:
      "https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg",
  },
  {
    author: "Theresa Webb",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emoji: "👋",
    commentsCount: "10",
    postedOn: 1723999973000,
    profileImg:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    author: "Marvin McKinney",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emoji: "🥹",
    commentsCount: "2",
    postedOn: 1723979903000,
    profileImg:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function Home() {
  const [open, setOpen] = React.useState(false);
  // const [postsData, setPostData] = React.useState([]);

  // React.useEffect(() => {
  //   async function fetchPosts() {
  //     const data = await fetch("../../../public/data/posts.json").then((res) =>
  //       res.json()
  //     );
  //     setPostData(data);
  //   }
  //   fetchPosts();
  // }, []);

  const handleModalState = (state) => {
    setOpen(state);
  };

  const handlePost = () => {
    handleModalState(true);
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
      <LoginModal open={open} handleModalState={handleModalState} />
    </CenteredLayout>
  );
}

export default Home;
