import { useState } from "react";
import AvatarTest from "../styles/Assets/images/avatars/image-amyrobson.png";
import HeaderButtons from "./HeaderButtons";

const CommentCardHeader = () => {
  const [isUser, setIsUser] = useState<boolean>(true);

  return (
    <>
      <div className="col-span-8 inline-flex items-center pl-6">
        <img src={AvatarTest} width={36} className="items-baseline mr-3" />
        <h1 className="font-semibold text-gray-800">amyrobson</h1>
        {isUser && <h1 className="p-1 ml-2 bg-indigo-500 text-white">you</h1>}
        <h1 className="text-sm pl-3 text-gray-500">1 month ago</h1>
      </div>
      <HeaderButtons isUser={isUser} />
    </>
  );
};

export default CommentCardHeader;
