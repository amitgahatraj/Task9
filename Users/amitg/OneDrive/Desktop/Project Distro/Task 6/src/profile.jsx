function Profile() {
  return (
    <>
      <div className="my-4 p-8 space-y-4">
        {/* <div className="bg-cyan-300 min-h-[calc(100vh-13rem)] py-6 m-2"> */}
        <div className="bg-cyan-300 ] py-6 m-2">
          Margin and Padding:
          <p className="bg-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt possimus magni veritatis molestias corporis animi totam
            quaerat, repellendus explicabo vel neque sequi ipsa similique
            excepturi, consectetur maxime laboriosam cum?
          </p>
        </div>

        <div className="p-4 bg-slate-300 text-white text-center rounded hover:bg-green-700">
          Change background
        </div>
        <div className="p-4 bg-slate-500 text-white text-center rounded hover:text-red-300">
          Change text color
        </div>
        <div className="p-4 bg-slate-700 text-white text-center rounded transform hover:scale-110 transition duration-300">
          Increase size
        </div>
      </div>
    </>
  );
}

export default Profile;
