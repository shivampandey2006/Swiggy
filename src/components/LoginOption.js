 export default function LoginOptions() {
  return (
    <div className="w-screen h-screen bg-orange-600 flex items-center justify-center">

      {/* Login */}
      <div className="w-[90%] max-w-md bg-orange-500 rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl">

        {/* Imggg */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSctaMkvaFuimJoGAg-UCZewh-AvIZOGlaMpdi0vYX4ZcPl7EImEYruZE&s=10"
          alt="Swiggy"
          className="w-24 h-24 rounded-2xl object-cover"
        />

        {/* Heading \\\*/}
        <h1 className="text-3xl font-bold text-white">
          Login
        </h1>

        <p className="text-white text-center">
          Continue with one of the options below
        </p>

        {/* Facebook 
        */}
        <button
          className="w-full bg-white px-4 py-3 rounded-2xl text-[1.1rem] font-semibold
          transition duration-150 hover:scale-105"
        >
          Continue with Facebook
        </button>

        {/* Google */}
        <button
          className="w-full bg-white px-4 py-3 rounded-2xl text-[1.1rem] font-semibold
          transition duration-150 hover:scale-105"
        >
          Continue with Google
        </button>

        {/* Sign Up */}
        <button
          className="text-white font-bold text-lg hover:underline"
        >
          Sign-up
        </button>

      </div>
    </div>
  );
}