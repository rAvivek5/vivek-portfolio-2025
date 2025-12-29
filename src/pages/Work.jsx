export default function Work() {
  return (
    <section className="min-h-screen px-10 md:px-24 pt-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* PAGE HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary">
            Work
          </h1>
          <p className="text-lg text-secondary">
            Professional experience, responsibilities, and key contributions.
          </p>
        </div>

        {/* ================= ROLE 1 ================= */}
        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-primary">
              Professional Services Engineer
            </h2>
            <p className="text-secondary">
              NICE Actimize · Full-time · Oct 2025 – Present
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Promoted to Professional Services Engineer in Oct 2025</li>
            <li>Completed Docker and Kubernetes training</li>
            <li>Owning complex production deployments and enhancements</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            Docker, Kubernetes, ActOne, AIS, Linux, Python
          </p>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-secondary/20" />

        {/* ================= ROLE 2 ================= */}
        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-primary">
              Associate Professional Services Engineer
            </h2>
            <p className="text-secondary">
              NICE Actimize · Full-time · Jul 2023 – Oct 2025
            </p>
          </div>

          {/* 2025 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-primary">2025</h3>
            <ul className="list-disc pl-6 space-y-2 text-secondary">
              <li>Completed Tableau training and built interactive dashboards</li>
              <li>Enhanced push2PROD with Import/Export of Actimize Repository Objects (ARO)</li>
              <li>Presented Automation Innovation at Directors’ Connect Forum (~100 attendees)</li>
              <li>Served as a speaker at VIT Alumni Connect</li>
            </ul>
          </div>

          {/* 2024 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-primary">2024</h3>
            <ul className="list-disc pl-6 space-y-2 text-secondary">
              <li>Built a custom DART utility reducing manual effort by ~80%</li>
              <li>Led UBS Sales Practices implementation</li>
              <li>Deployed Alert Extract Utility to production for Schwab</li>
              <li>Automated daily load checks for missing mandatory files</li>
            </ul>
          </div>

          {/* 2023 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-primary">2023</h3>
            <ul className="list-disc pl-6 space-y-2 text-secondary">
              <li>Completed Basic AIS and ActOne platform certification</li>
              <li>Developed MSSQL Database Table Data Extract Tool</li>
              <li>Achieved Sales Practices (SP) training certification</li>
            </ul>
          </div>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            Python, Shell Scripting, MSSQL, ActOne, AIS, Linux, Tableau
          </p>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-secondary/20" />

        {/* ================= ROLE 3 ================= */}
        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-primary">
              Project Intern
            </h2>
            <p className="text-secondary">
              NICE Actimize · Internship · Feb 2023 – Jul 2023
            </p>
          </div>

          <p className="text-secondary leading-relaxed">
            Automated manual onboarding workflows for Professional Services teams
            by developing a Vue-based user interface with a Python backend.
            Generated environment validation, sample alert creation, and cleanup
            reports in TXT and PDF formats.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            Python, Vue.js, Shell Scripting, Linux
          </p>

        </div>

        <div className="border-t border-secondary/20" />

      </div>
    </section>
  )
}
