import Plus from "../styles/Assets/images/icon-plus.svg";
import Minus from "../styles/Assets/images/icon-minus.svg";

const Vote = () => {
  return (
    <div className="col-span-1 row-span-1 sm:row-span-2">
      <div
        id="test"
        className="flex sm:flex-col items-center py-5 m-2 space-x-4 sm:space-x-0 sm:space-y-4 bg-indigo-50 rounded-lg blueText"
      >
        <img src={Plus} width={18} />
        <b>2</b>
        <img src={Minus} width={18} />
      </div>
    </div>
  );
};

export default Vote;
