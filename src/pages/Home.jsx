import me from "../assets/me.jpg"

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-10 md:px-24 pt-32">

      {/* CONTENT WRAPPER */}
      <div className="mx-auto w-full max-w-7xl">

        {/* GRID: TEXT | IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24">

          {/* LEFT: TEXT */}
          <div className="flex flex-col gap-10">

            {/* HEADINGS */}
            <div className="text-primary">
              <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
                Hello<span className="text-red-500">.</span>
              </h1>
              <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
                I am
              </h1>
              <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
                Vivek
              </h1>
            </div>

            {/* SUBTEXT */}
            <div className="text-lg text-secondary">
              <p>A learner focused on building reliable systems through automation.</p>
            </div>

          </div>

          {/* RIGHT: IMAGE + VERTICAL LINKS */}
          <div className="flex justify-center items-center">

            <div className="relative">

              {/* IMAGE */}
              <img
                src={me}
                alt="Vivek Pundkar"
                className="w-full max-w-sm rounded-lg  contrast-125 opacity-90
                           hover:grayscale-0 transition duration-700"
              />

              {/* VERTICAL LINKS — CLOSE & CENTERED TO IMAGE */}
              <div
                className="absolute left-full ml-6 top-1/2 -translate-y-1/2
                           flex flex-col justify-between items-center
                           h-36 text-xs tracking-widest text-primary"
              >
                <a
                  href="https://www.linkedin.com/in/vivek-pundkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rotate-90 hover:opacity-70 transition"
                >
                  LINKEDIN
                </a>

                <a
                  href="mailto:ravivekpundkar@gmail.com"
                  className="rotate-90 hover:opacity-70 transition"
                >
                  EMAIL
                </a>

                <a
                  href="https://github.com/rAvivek5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rotate-90 hover:opacity-70 transition"
                >
                  GITHUB
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
