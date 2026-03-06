import { FaReact, FaAws, FaJenkins } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import {
  SiTypescript,
  SiDotnet,
  SiGithubactions,
  SiGrafana,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

function SectionLabel({ children }) {
  return (
    <div className="px-4 py-3 border-b border-white/[0.06] text-xs tracking-widest uppercase text-indigo-400">
      {children}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function SkillRow({ icon, name, color }) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border-b border-white/[0.05] last:border-0">
      <span className={`${color} flex-shrink-0`}>{icon}</span>
      <span className="text-slate-300 text-sm">{name}</span>
    </div>
  );
}

export default function Abouts() {
  return (
    <div className="flex items-center justify-center mb-16">
      <div className="mt-28 mx-6 sm:mx-24 md:mx-30 lg:mx-60 xl:mx-88 w-full">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="flex flex-col text-4xl font-bold leading-tight">
            <span className="gradient-text">Work.</span>
            <span className="text-slate-300">About.</span>
          </h1>
          <p className="mt-3 text-slate-500 text-sm">
            I'm obsessed with side projects and building in{" "}
            <a
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
              target="_blank"
              href="https://github.com/shavb"
            >
              public
            </a>
          </p>
        </div>

        {/* Bio */}
        <GlassCard>
          <SectionLabel>About</SectionLabel>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full h-16 w-16 ring-2 ring-indigo-500/30 flex-shrink-0"
                src="/shyamm.png"
                alt="Shyam Bisht"
              />
              <div>
                <p className="text-slate-100 font-medium">Shyam Bisht</p>
                <p className="text-sm text-slate-500">
                  Digital Craftsman /{" "}
                  <span className="text-indigo-400">DevOps Engineer</span>
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Results-driven DevOps Engineer with 2+ years of experience
              building and maintaining scalable SaaS applications and cloud
              infrastructure. Skilled in CI/CD automation, containerization
              (Docker, Kubernetes), infrastructure monitoring, and full-stack
              development using React and .NET Core. Currently pursuing CKA
              certification. Connect on{" "}
              <a
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                href="https://www.linkedin.com/in/shyambisht/"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                href="https://github.com/shavb"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </GlassCard>

        {/* Experience */}
        <GlassCard className="mt-4">
          <SectionLabel>Experience</SectionLabel>
          <div className="p-4 flex flex-col gap-6">
            <div className="border-l-2 border-indigo-500/40 pl-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h2 className="text-slate-100 font-medium">
                    Associate Software Engineer
                  </h2>
                  <p className="text-indigo-400 text-sm mt-0.5">
                    Acuity Knowledge Partners
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-slate-500">Jul 2022 – Aug 2023</p>
                  <p className="text-xs text-slate-600">Bengaluru, India</p>
                </div>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {[
                  "CI/CD pipelines with AWS CodeBuild & CodePipeline, automating build, test, and deployment",
                  ".NET Core REST APIs serving 50,000+ daily requests at 99.9% uptime",
                  "React.js frontend performance improved by 30% through optimized rendering",
                  "SonarQube & OWASP Dependency Check for SAST/DAST pipeline security scanning",
                ].map((item) => (
                  <li key={item} className="text-xs text-slate-500 flex gap-2">
                    <span className="text-indigo-500 mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-2 border-indigo-500/20 pl-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h2 className="text-slate-100 font-medium">
                    Software Engineer Intern
                  </h2>
                  <p className="text-indigo-400 text-sm mt-0.5">
                    Acuity Knowledge Partners
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-slate-500">Feb 2022 – Jun 2022</p>
                  <p className="text-xs text-slate-600">Bengaluru, India</p>
                </div>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {[
                  "Full-stack features with React.js and .NET Core APIs supporting 10,000+ daily requests",
                  "Reusable UI components and RESTful API endpoints, improving code maintainability",
                  "CI/CD pipeline configuration and SAST/DAST security tooling",
                ].map((item) => (
                  <li key={item} className="text-xs text-slate-500 flex gap-2">
                    <span className="text-indigo-500 mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* Education */}
        <GlassCard className="mt-4">
          <SectionLabel>Education</SectionLabel>
          <div className="divide-y divide-white/[0.05]">
            {[
              {
                degree: "PG Diploma in DevOps",
                school: "Atlantic Technological University · Ireland",
                year: "2024",
              },
              {
                degree: "Master of Computer Applications",
                school: "Graphic Era University · India",
                year: "2022",
              },
              {
                degree: "BSc in Computer Science",
                school: "Tilak College of Science · India",
                year: "2020",
              },
            ].map(({ degree, school, year }) => (
              <div
                key={degree}
                className="px-4 py-3 flex justify-between items-start gap-2"
              >
                <div>
                  <p className="text-slate-200 text-sm font-medium">{degree}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{school}</p>
                </div>
                <span className="text-xs text-slate-600 flex-shrink-0">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Skills */}
        <div className="md:grid grid-cols-2 gap-4 mt-4">
          <GlassCard>
            <SectionLabel>Front-End</SectionLabel>
            <SkillRow
              icon={<FaReact size={22} />}
              name="React.js"
              color="text-sky-400"
            />
            <SkillRow
              icon={<SiTypescript size={22} />}
              name="TypeScript"
              color="text-blue-400"
            />
            <SkillRow
              icon={<RiTailwindCssLine size={22} />}
              name="Tailwind CSS"
              color="text-cyan-400"
            />
          </GlassCard>
          <GlassCard className="mt-4 md:mt-0">
            <SectionLabel>Back-End</SectionLabel>
            <SkillRow
              icon={<SiDotnet size={22} />}
              name=".NET Core"
              color="text-purple-400"
            />
            <SkillRow
              icon={<DiNodejs size={22} />}
              name="Node.js"
              color="text-green-400"
            />
          </GlassCard>
          <GlassCard className="mt-4 col-span-2">
            <SectionLabel>DevOps & Cloud</SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-3">
              <SkillRow
                icon={<SiDocker size={22} />}
                name="Docker"
                color="text-blue-400"
              />
              <SkillRow
                icon={<SiKubernetes size={22} />}
                name="Kubernetes"
                color="text-blue-500"
              />
              <SkillRow
                icon={<FaAws size={22} />}
                name="AWS"
                color="text-orange-400"
              />
              <SkillRow
                icon={<FaJenkins size={22} />}
                name="Jenkins"
                color="text-red-400"
              />
              <SkillRow
                icon={<SiGithubactions size={22} />}
                name="GitHub Actions"
                color="text-slate-300"
              />
              <SkillRow
                icon={<SiGrafana size={22} />}
                name="Grafana"
                color="text-orange-400"
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
