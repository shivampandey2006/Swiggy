export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 md:px-16 lg:px-10 py-20">

      {/* Download Banner */}
      <div className="mb-10 ">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="Download Swiggy App"
          className="w-full rounded-xl"
        />
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-bold">Company</h2>

          <button className="text-gray-400 text-left hover:text-white">
            About Us
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Swiggy Corporate
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Careers
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Team
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Swiggy One
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Swiggy Instamart
          </button>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-bold">Contact Us</h2>

          <button className="text-gray-400 text-left hover:text-white">
            Help & Support
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Partner With Us
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Ride With Us
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Legal
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Terms & Conditions
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Privacy Policy
          </button>
        </div>

        {/* Available In */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-bold">Available In</h2>

          <button className="text-gray-400 text-left hover:text-white">
            Bhopal
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Delhi
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Mumbai
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Chennai
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Raipur
          </button>
        </div>

        {/* Life at Swiggy */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-bold">Life at Swiggy</h2>

          <button className="text-gray-400 text-left hover:text-white">
            Explore with Swiggy
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Swiggy News
          </button>

          <button className="text-gray-400 text-left hover:text-white">
            Snacks
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center ">
        <h2 className="text-white text-xl font-bold ">
          Made with ❤️ by Shivam
        </h2>
      </div>

    </footer>
  );
}