export default function Projects() {
  return (
    <section className="min-h-screen px-10 md:px-24 pt-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">

        {/* PAGE HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            PROJECTS
          </h1>
          <p className="text-lg text-secondary">
            A selection of industry, academic, and personal projects demonstrating
            problem-solving, automation, and system-level thinking.
          </p>
        </div>

        {/* ================= PUSH2PROD ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            PUSH2PROD AUTOMATION UTILITY
          </h2>

          <p className="text-secondary">
            <span className="font-medium text-primary">Duration:</span> Oct 2024 – Dec 2024
          </p>

          <p className="text-secondary">
            Developed a production-grade automation utility to streamline deployment
            workflows involving databases, server files, and application components.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Automated SQL operations such as CREATE, UPDATE, and DELETE</li>
            <li>Secure handling of server-side file updates on Linux systems</li>
            <li>Integrated ActOne Designer APF imports using the RCM utility</li>
            <li>Supported execution across UAT and Production environments</li>
            <li>Centralized configuration management for environment-specific settings</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Reduced manual intervention during deployments, improved consistency
            across environments, and enabled reliable single-command production
            releases. Is being used for actimize production deployment of top global
            Financial Institutions.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            Python, Shell Scripting, MSSQL, Linux, Actimize
          </p>
        </div>

        <div className="border-t border-secondary/20" />

        {/* ================= MSSQL EXTRACT TOOL ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            MSSQL DATABASE TABLE DATA EXTRACT TOOL
          </h2>

          <p className="text-secondary">
            <span className="font-medium text-primary">Duration:</span> Oct 2023 – Nov 2023
          </p>

          <p className="text-secondary">
            Built a configurable utility to standardize secure data extraction
            and delivery for client reporting.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Supported full and delta-based table extraction</li>
            <li>Configuration-driven using config.ini and table.ini</li>
            <li>PGP-encrypted outputs uploaded to Amazon S3</li>
            <li>Trigger files generated for success/failure validation</li>
            <li>Automated archival and cleanup based on retention policies</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Improved reliability and security of client data delivery while
            significantly reducing manual database operations and turnaround time.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            Python, Shell Scripting, MSSQL, Amazon S3, PGP
          </p>
        </div>

        <div className="border-t border-secondary/20" />

        {/* ================= PROJECT INTERN ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            CLIENT ONBOARDING AUTOMATION PLATFORM
          </h2>

          <p className="text-secondary">
            <span className="font-medium text-primary">Role:</span>{" "}
            Project Intern · Feb 2023 – Jul 2023
          </p>

          <p className="text-secondary">
            Developed an automation platform to reduce manual effort during
            onboarding of new clients for Professional Services teams.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Built a Vue-based UI to capture operational inputs</li>
            <li>Implemented Python backend to execute automation workflows</li>
            <li>Automated environment validation, sample alert generation, and cleanup</li>
            <li>Generated consolidated reports in TXT and PDF formats</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Reduced onboarding effort, improved consistency of operational checks,
            and provided a single interface for multiple automation tasks.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            Python, Vue.js, Shell Scripting, Linux
          </p>
        </div>

        <div className="border-t border-secondary/20" />

        {/* ================= OBJECT DETECTION ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            DETECTION OF OBJECT AND ITS TRACKING
          </h2>

          <p className="text-secondary">
            Academic project focused on object detection and tracking using
            classical computer vision techniques.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Dataset collection and preprocessing</li>
            <li>Implemented multiple classifier-based detection models</li>
            <li>Evaluated performance using Precision, Recall, and F1-score</li>
            <li>Contour-based tracking for object movement</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Gained hands-on experience in evaluating machine learning models and
            understanding trade-offs between detection accuracy and performance.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            OpenCV, SIFT, K-Means, PCA
          </p>
        </div>

        <div className="border-t border-secondary/20" />

        {/* ================= COVID HELPER ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            COVID HELPER
          </h2>

          <p className="text-secondary">
            Web application providing real-time access to hospitals,
            vaccination centers, and COVID-related information.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Hospital registration and facility availability updates</li>
            <li>Search for nearby hospitals and vaccination centers</li>
            <li>COVID-19 tracker and availability sharing</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Improved accessibility to healthcare-related information during
            the pandemic through a centralized, easy-to-use interface.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Live URL:</span>{" "}
            <a
              href="https://helper-a77d7.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              helper-a77d7.web.app
            </a>
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            React.js, Firebase, Material-UI, Cloud Firestore
          </p>
        </div>

        <div className="border-t border-secondary/20" />

        {/* ================= AMAZON CLONE ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            AMAZON CLONE
          </h2>

          <p className="text-secondary">
            E-commerce application built to understand frontend architecture
            and cloud-backed workflows.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Implemented product listing, cart, and checkout flow</li>
            <li>Integrated Stripe for virtual payment handling</li>
            <li>Used Firebase for authentication and data storage</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Strengthened understanding of component-based UI design,
            state management, and payment integration workflows.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Live URL:</span>{" "}
            <a
              href="https://clone-de.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              clone-de.web.app
            </a>
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            React.js, Firebase, Stripe, Cloud Firestore
          </p>
        </div>

        <div className="border-t border-secondary/20" />

        {/* ================= MOVIE DASHBOARD (LAST) ================= */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-primary tracking-wide">
            MOVIE DISCOVERY DASHBOARD
          </h2>

          <p className="text-secondary">
            A React-based movie discovery platform for exploring trending
            and upcoming movies through a dashboard-style interface.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Dashboard views for Trending, Watchlist, Favourites, and Calendar</li>
            <li>Integrated external movie APIs for dynamic content</li>
            <li>Pagination and navigation for large datasets</li>
            <li>Responsive UI optimized for modern browsers</li>
          </ul>

          <p className="text-secondary">
            <span className="font-medium text-primary">Impact:</span>{" "}
            Improved frontend development skills and understanding of API-driven
            user interfaces and client-side data handling.
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Live URL:</span>{" "}
            <a
              href="https://practical-boyd-a0f651.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              practical-boyd-a0f651.netlify.app
            </a>
          </p>

          <p className="text-secondary">
            <span className="font-medium text-primary">Technologies:</span>{" "}
            React.js, JavaScript, REST APIs, CSS
          </p>
        </div>
        <div className="border-t border-secondary/20" />

      </div>
    </section>
  )
}
