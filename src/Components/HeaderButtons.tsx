import { useState } from "react";
import BinIcon from "../styles/Assets/images/icon-delete.svg";
import EditIcon from "../styles/Assets/images/icon-edit.svg";
import ReplyIcon from "../styles/Assets/images/icon-reply.svg";

const HeaderButtons = (props: { isUser: boolean }) => {
  return (
    <>
      {props.isUser ? (
        <div className="inline-flex justify-end">
          <button className="inline-flex items-baseline pr-4 redText">
            <img src={BinIcon} className="pr-2" width={18} />
            <b>Delete</b>
          </button>
          <button className="inline-flex items-baseline pr-2 blueText">
            <img src={EditIcon} className="pr-2" width={18} />
            <b>Edit</b>
          </button>
        </div>
      ) : (
        <div>
          <button className="inline-flex items-baseline pr-4 blueText">
            <img src={ReplyIcon} className="pr-2" width={18} />
            <b>Reply</b>
          </button>
        </div>
      )}
    </>
  );
};

export default HeaderButtons;
