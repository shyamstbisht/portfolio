import ProjectsData from "../../utils/ProjectsData";
import { CiShare1 } from "react-icons/ci";

export default function Projects() {
  return (
    <div className="flex items-center justify-center mb-16">
      <div className="mt-28 mx-6 sm:mx-24 md:mx-30 lg:mx-60 xl:mx-88 w-full">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="flex flex-col text-4xl font-bold leading-tight">
            <span className="gradient-text">Work.</span>
            <span className="text-slate-300">Hobby.</span>
          </h1>
        </div>

        <div>
          <h2 className="text-xs tracking-widest uppercase text-indigo-400 mb-4">
            All Projects
          </h2>
          <div className="flex flex-col gap-4">
            {ProjectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="lg:w-1/2 overflow-hidden">
                  <img
                    src={project.img_url}
                    alt={project.Name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-6 flex flex-col justify-center gap-3">
                  <div className="flex items-center gap-2">
                    <h1 className="uppercase text-lg font-semibold text-slate-100 tracking-wide">
                      {project.Name}
                    </h1>
                    <a
                      href={project.link}
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <CiShare1 size={18} />
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
