import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import EmojiIcon from "../../components/EmojiIcon";
import InputField from "../../components/InputField";

function CreatePost() {
  return (
    <Card>
      <div className="mb-5 flex gap-4 items-center">
        <h3 className="text-lg font-medium text-gray-700 dark:text-neutral">
          Create post
        </h3>
      </div>
      <div className="mb-3 flex gap-4 items-center bg-dark rounded-md p-4">
        <EmojiIcon>💬</EmojiIcon>
        <InputField
          inputClassName={"border-none px-0"}
          type="text-area"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex place-content-end">
        <Link to={"/login"}>
          <Button variant="primary">Post</Button>
        </Link>
      </div>
    </Card>
  );
}

export default CreatePost;
