import moment from "moment";

function Modal({ instance }) {
  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg px-5 py-2 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="p-5">
          <h2 className="text-xl font-bold">{instance.title}</h2>
          <p>{moment(instance.createdOn.toString()).calendar()}</p>
          <p className="text-lg text-gray-500 py-10">{instance.description}</p>
          {instance.status === false && (
            <p className="text-red-600 mt-2">In Progress</p>
          )}
          {instance.status === true && (
            <p className="text-green-600 mt-2">Completed</p>
          )}
        </div>
        <div className="p-3  mt-2 text-center space-x-4 md:block">
          <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
            Cancel
          </button>
          <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
