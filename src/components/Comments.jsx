import { useState } from "react";
import pencil from "../icons/pencil.png";
import { supabase } from "../services/base";

function Comments({ id }) {
  const [initComment, setComment] = useState(false);

  const dropHandler = () => {
    setComment(!initComment);
  };

  const remarkHandler = (e) => {
    e.preventDefault();
    const { remark } = e.target.elements;

    const remarker = async () => {
      const { data, error } = await supabase
        .from("complaints")
        .update({
          remark: remark.value,
        })
        .eq("id", id);
    };

    remarker();
  };
  return (
    <section>
      <div className="flex justify-end">
        <div className="hover:bg-gray-600 p-2 rounded" onClick={dropHandler}>
          <img src={pencil} alt="pencil" className="w-5 h-5" />
        </div>
      </div>
      {initComment && (
        <div className="mt-2">
          <form onSubmit={remarkHandler}>
            <textarea
              className="w-full h-60 bg-gray-600 text-white text-md"
              placeholder="Type..."
              type="text"
              name="remark"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Comments;
