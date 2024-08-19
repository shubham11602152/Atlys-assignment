import Card from "../../components/Card";
import EmojiIcon from "../../components/EmojiIcon";
import chatBubble from "../../../assets/Chat-Bubble.svg";
import { formatDistance } from "date-fns";

function PostCard({
  author,
  description,
  emoji,
  commentsCount,
  postedOn,
  profileImg,
}) {
  const dateDistance = formatDistance(new Date(postedOn), new Date(), {
    addSuffix: true,
  });
  return (
    <Card>
      <div className="mb-5 flex gap-4 items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={profileImg}
          alt=""
        />
        <div>
          <h3 className="text-md font-medium text-gray-700 dark:text-neutral">
            {author}
          </h3>
          <span className="text-sm tracking-wide text-gray-600 dark:text-light font-medium">
            {dateDistance}
          </span>
        </div>
      </div>
      <div className="mb-3 flex gap-4 items-center bg-dark rounded-md p-4">
        <EmojiIcon>{emoji}</EmojiIcon>
        <p className="text-gray-700 dark:text-light">{description}</p>
      </div>
      <div className="inline-flex gap-2">
        <img src={chatBubble} />
        <span className="text-sm tracking-wide text-gray-600 dark:text-light font-medium">
          {commentsCount} comments
        </span>
      </div>
    </Card>
  );
}

export default PostCard;
