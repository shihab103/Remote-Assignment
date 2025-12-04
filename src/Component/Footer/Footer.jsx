export default function Footer() {
  return (
    <div className="w-full bg-[#1e1e1e]">
      <footer className="bg-[#281824] max-w-[1440px] mx-auto text-white pt-20 pb-24">
        <div className="px-6 lg:px-12">
          
          {/* Top 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-12">
            
            {/* About Us */}
            <nav>
              <h3 className="font-bold text-xl mb-5">About Us</h3>
              <div className="flex flex-col space-y-3 text-[15px]">
                <a className="link link-hover opacity-80 hover:opacity-100" href="#">
                  Resources
                </a>
                <a className="link link-hover opacity-80 hover:opacity-100" href="#">
                  Company
                </a>
                <a className="link link-hover opacity-80 hover:opacity-100" href="#">
                  Property
                </a>
                <a className="link link-hover opacity-80 hover:opacity-100" href="#">
                  Contact Us
                </a>
              </div>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-xl mb-5">Contact Us</h3>
              <p className="text-[15px] mb-1 opacity-80">hello.abc@gmail.com</p>
              <p className="text-[15px] opacity-80">+012233455667</p>
            </div>

            {/* Follow Us */}
            <div className="md:text-right">
              <h3 className="font-bold text-xl mb-5">Follow Us</h3>
              <div className="flex space-x-4 md:justify-end mb-6">
                {["f", "X", "i", "W", "G", "T"].map((icon, i) => (
                  <a
                    key={i}
                    className="btn btn-circle btn-sm bg-transparent border-white text-white hover:bg-white hover:text-[#3C1A4A] text-base"
                    href="#"
                  >
                    {icon}
                  </a>
                ))}
              </div>

              <p className="mt-10 text-[15px] opacity-80">
                © 2025 Havenix. All rights reserved.
              </p>
            </div>

          </div>

          {/* Large WiztecBD Text */}
          <div className="text-center pt-10 overflow-visible">
            <h1
              className="font-semibold text-[200px] xl:text-[260px]"
              style={{
                backgroundImage: "linear-gradient(to right, #8a7384, #cac3c3)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              WiztecBD
            </h1>
          </div>

        </div>
      </footer>
    </div>
  );
}
