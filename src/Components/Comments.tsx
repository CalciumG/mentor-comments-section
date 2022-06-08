import { useState } from "react";
import AvatarTest from "../styles/Assets/images/avatars/image-amyrobson.png";
import HeaderButtons from "./HeaderButtons";
import Plus from "../styles/Assets/images/icon-plus.svg";
import Minus from "../styles/Assets/images/icon-minus.svg";

const basePath = "../styles/Assets/images/avatars/";

const Comments = (props: {
  content: string;
  createdAt: string;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
}) => {
  const [isUser, setIsUser] = useState<boolean>(true);
  return (
    <div>
      <div className="grid grid-rows-1 p-4 my-2 bg-white shadow-sm rounded-md">
        <div className="inline-flex items-center pb-4">
          <img
            src={props.user.image.png}
            width={36}
            className="items-baseline mr-3"
          />
          <h1 className="font-semibold text-gray-800">{props.user.username}</h1>
          {isUser && (
            <h1 className="p-1 ml-2 bg-indigo-500 rounded-sm text-white">
              you
            </h1>
          )}
          <h1 className="text-sm pl-3 text-gray-500">{props.createdAt}</h1>
        </div>
        <p>{props.content}</p>
        <div className="pt-3" id="counter">
          <div className="flex items-center justify-between">
            <span className="flex items-center p-3 space-x-4 bg-indigo-50 rounded-lg blueText">
              <img src={Plus} width={18} />
              <b>2</b>
              <img src={Minus} width={18} />
            </span>
            <span>
              <HeaderButtons isUser={true} />
            </span>
          </div>
        </div>
        <div id="buttons" className="w-2/3"></div>
      </div>
    </div>
  );
};

export default Comments;
