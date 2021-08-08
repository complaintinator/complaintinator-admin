import { useState } from "react";
import pencil from "../icons/pencil.png";
import Modal from "./Modal";

function Comments({ instance }) {
  const [initComment, setComment] = useState(false);

  const dropHandler = () => {
    setComment(!initComment);
  };

  // const remarkHandler = (e) => {
  //   e.preventDefault();
  //   const { remark } = e.target.elements;

  //   const remarker = async () => {
  //     await supabase
  //       .from("complaints")
  //       .update({
  //         remark: remark.value,
  //       })
  //       .eq("id", id);

  //     await supabase
  //       .from("complaints")
  //       .update({
  //         status: true,
  //       })
  //       .eq("id", id);
  //   };

  //   remarker();
  // };
  return (
    <section>
      <div className="flex justify-end">
        <div className="hover:bg-gray-600 p-2 rounded" onClick={dropHandler}>
          <img src={pencil} alt="pencil" className="w-5 h-5" />
        </div>
      </div>
      {initComment && <Modal instance={instance} />}
    </section>
  );
}

export default Comments;
