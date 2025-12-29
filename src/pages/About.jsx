export default function About() {
  return (
    <section className="min-h-screen px-10 md:px-24 pt-32">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* PAGE HEADER */}
        <h1 className="text-4xl font-bold text-primary tracking-wide">
          ABOUT ME
        </h1>

        {/* STORY CONTENT */}
        <div
          className="flex flex-col gap-6 text-secondary text-lg leading-relaxed
                     bg-story p-5 rounded-md"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            hyphens: "auto",
          }}
        >

          <p>
            I didn’t start out trying to automate everything—I started by trying to understand why things break. Early on, I became curious about how systems behave in real environments, especially when something doesn’t go as planned. That curiosity gradually turned into a habit of digging deeper, asking better questions, and finding ways to make processes more reliable.
          </p>

          <p>
            As I worked more closely with live systems and real users, I noticed how much time and effort went into repetitive manual tasks. Instead of accepting that as “just the way things are,” I began building small tools and utilities to make everyday work simpler and more predictable. Over time, those small improvements added up—saving effort, reducing errors, and making systems easier to trust.
          </p>

          <p>
            I enjoy working at the intersection of problem-solving and practicality. I like understanding requirements clearly, breaking down complex workflows, and turning them into solutions that actually work in production. I’m comfortable taking ownership, learning from failures, and improving things step by step rather than chasing shortcuts.
          </p>

          <p>
            More than anything, I value clarity—clear thinking, clean solutions, and meaningful work. Whether I’m improving an existing system or building something from scratch, my focus is always on creating solutions that are reliable, thoughtful, and genuinely useful.
          </p>

          {/* SIGNATURE */}
          <p className="text-primary font-medium text-right">
            – Vivek Pundkar
          </p>

        </div>

      </div>
    </section>
  )
}
