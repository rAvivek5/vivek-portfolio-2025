export default function Experience() {
  return (
    <section className="min-h-screen px-10 md:px-24 pt-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* PAGE HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            EXPERIENCE
          </h1>
          <p className="text-lg text-secondary">
            Professional journey, responsibilities, and academic background.
          </p>
        </div>

        {/* ================= PROFESSIONAL EXPERIENCE ================= */}
        <div className="flex flex-col gap-6">

          <h2 className="text-3xl font-semibold text-primary tracking-wide">
            PROFESSIONAL EXPERIENCE
          </h2>

          {/* ROLE 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary tracking-wide">
              PROFESSIONAL SERVICES ENGINEER
            </h3>

            <p className="text-secondary">
              NICE Actimize · Full-time · Oct 2025 – Present
            </p>

            <ul className="list-disc pl-6 space-y-2 text-secondary">
              <li>Promoted based on technical ownership and delivery performance</li>
              <li>Handled complex production deployments and system enhancements</li>
              <li>Worked on automation and reliability improvements for live systems</li>
              <li>Completed Docker and Kubernetes training for modern deployment practices</li>
            </ul>

            <p className="text-secondary">
              <span className="font-medium text-primary">Technologies:</span>{" "}
              Python, Linux, Docker, Kubernetes, ActOne, AIS
            </p>
          </div>

          <div className="border-t border-secondary/20" />

          {/* ROLE 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-primary tracking-wide">
              ASSOCIATE PROFESSIONAL SERVICES ENGINEER
            </h3>

            <p className="text-secondary">
              NICE Actimize · Full-time · Jul 2023 – Oct 2025
            </p>

            {/* 2025 */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-primary tracking-wide">
                2025
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Enhanced push2PROD utility with ARO import/export support</li>
                <li>Designed and implemented complex ETL logic for Studio models</li>
                <li>Presented automation innovations at Directors’ Connect Forum (~100 attendees)</li>
                <li>Served as a speaker at VIT Alumni Connect</li>
              </ul>
            </div>

            {/* 2024 */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-primary tracking-wide">
                2024
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Built a custom DART automation utility reducing manual effort by ~80%</li>
                <li>Delivered client customizations for UBS, Raymond James, Safra, and RBC</li>
                <li>Developed trade blotter archiving utility for performance optimization</li>
                <li>Deployed alert extract utility to production for Schwab</li>
                <li>Automated daily load checks for missing mandatory files</li>
              </ul>
            </div>

            {/* 2023 */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-primary tracking-wide">
                2023
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Completed Basic AIS and ActOne platform certification</li>
                <li>Developed MSSQL database table data extract tool</li>
                <li>Achieved Sales Practices (SP) training certification</li>
              </ul>
            </div>

            <p className="text-secondary">
              <span className="font-medium text-primary">Technologies:</span>{" "}
              Python, Shell Scripting, MSSQL, ActOne, AIS, Linux, Tableau
            </p>
          </div>

          <div className="border-t border-secondary/20" />

          {/* ROLE 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary tracking-wide">
              PROJECT INTERN
            </h3>

            <p className="text-secondary">
              NICE Actimize · Internship · Feb 2023 – Jul 2023
            </p>

            <p className="text-secondary leading-relaxed">
              Automated onboarding workflows for Professional Services teams by
              developing a Vue-based user interface with a Python backend.
              Implemented environment validation, sample alert generation,
              and cleanup utilities, producing consolidated TXT and PDF reports
              to reduce manual effort.
            </p>

            <p className="text-secondary">
              <span className="font-medium text-primary">Technologies:</span>{" "}
              Python, Vue.js, Shell Scripting, Linux
            </p>
          </div>

        </div>

          <div className="border-t border-secondary/20" />

        {/* ================= EDUCATION ================= */}
        <div className="flex flex-col gap-8">

          <h2 className="text-3xl font-semibold text-primary tracking-wide">
            EDUCATION
          </h2>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary tracking-wide">
              BACHELOR OF TECHNOLOGY (B.TECH)
            </h3>

            <p className="text-secondary">
              Electronics & Telecommunication Engineering
            </p>

            <p className="text-secondary">
              Vishwakarma Institute of Technology (VIT) Pune, Affiliated to Savitribai Phule Pune University · 2019 – 2023
            </p>

            <p className="text-secondary">
              <span className="font-medium text-primary">CGPA:</span> 8.66 / 10
            </p>

            <ul className="list-disc pl-6 space-y-2 text-secondary">
              <li>Completed rigorous coursework in Data Structures, Operating Systems, DBMS, Computer Networks, and Signal Processing</li>
              <li>Executed mini and major projects focused on automation and system-level problem solving</li>
              <li>Delivered technical seminars, presentations, and participated in group discussions</li>
              <li>Worked extensively in laboratory environments emphasizing practical implementation</li>
              <li>Built strong analytical and mathematical foundations relevant to computer science</li>
            </ul>

            <p className="text-secondary">
              <span className="font-medium text-primary">Tools & Technologies:</span>{" "}
              C, C++, Python, MATLAB, SQL, Linux
            </p>
          </div>

        </div>
          <div className="border-t border-secondary/20" />

      </div>
    </section>
  )
}
