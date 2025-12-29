export default function Contact() {
  return (
    <section className="min-h-screen px-10 md:px-24 pt-32">
      <div className="max-w-4xl mx-auto flex flex-col gap-14">

        {/* PAGE HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            CONTACT
          </h1>
          <p className="text-lg text-secondary">
            Feel free to reach out for collaboration, opportunities, or a quick chat.
          </p>
        </div>

        {/* CONTACT DETAILS */}
        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-1">
            <p className="text-primary font-medium">Email</p>
            <a
              href="mailto:ravivekpundkar@gmail.com"
              className="text-secondary hover:underline"
            >
              ravivekpundkar@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-primary font-medium">Mobile</p>
            <p className="text-secondary">
              +91 95522 71206
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-primary font-medium">LinkedIn</p>
            <a
              href="https://linkedin.com/in/vivek-pundkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              linkedin.com/in/vivek-pundkar
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-primary font-medium">GitHub</p>
            <a
              href="https://github.com/rAvivek5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              github.com/rAvivek5
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-primary font-medium">Resume</p>
            {/* <a
              href="/Vivek_Pundkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Download PDF
            </a> */}

            <a
              href="/src/assets/Vivek_Pundkar_Resume.pdf"
              download
              className="text-secondary hover:underline"
            >
              Download Resume (PDF)
            </a>

          </div>
          
          
          <div className="flex flex-col gap-1">
            <p className="text-primary font-medium">Location</p>
            <p className="text-secondary">
              Pune, India
            </p>
            <div className="w-full h-[350px] rounded-md overflow-hidden border border-secondary/20">
              <iframe
                title="Pune, India Map"
                src="https://www.google.com/maps?q=Pune,India&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
