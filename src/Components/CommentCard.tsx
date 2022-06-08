import Vote from "./Vote";
import CommentCardHeader from "./CommentCardHeader";

const CommentCard = (props: any) => {
  return (
    <div className="grid grid-rows-2 grid-cols-12 sm:w-5/12 w-11/12 p-4 pb-6 mt-6 bg-white shadow-sm rounded-lg">
      <div className="order-5 sm:-order-none">
        <Vote />
      </div>
      <CommentCardHeader />
      <div className="col-span-12 sm:col-span-10 pl-6">
        <p className="text-gray-500">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
