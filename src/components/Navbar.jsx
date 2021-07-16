function Navbar() {
  return (
    <header className="mx-auto max-w-6xl px-6 bg-transparent mt-10">
      <div className="flex">
        <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500 whitespace-nowrap">
          Complaintinator
        </p>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-600 text-4xl font-bold ml-2">
          Admin
        </p>
      </div>
    </header>
  );
}

export default Navbar;
