import { adminFirebaseAuth } from "../services/config";

function Dashnavbar() {
  return (
    <header className="mx-auto max-w-6xl px-6 bg-transparent flex justify-end">
      <div>
        <button
          className="bg-red-600 p-2 text-white uppercase rounded font-bold transition transform hover:-translate-y-1 duration-500"
          onClick={() => adminFirebaseAuth.signOut()}
        >
          Log out
        </button>
      </div>
    </header>
  );
}

export default Dashnavbar;
