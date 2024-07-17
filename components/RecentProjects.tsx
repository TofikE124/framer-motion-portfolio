import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/PinContainer";
import { Project as ProjectType, TagType, projects } from "@/data";
import { Suspense } from "react";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const { id, title, des, tags, img, live_link, source_code_link } = project;

  return (
    <div
      key={id}
      className="sm:w-[570px] w-[80vw] sm:h-[40rem] h-[35rem] lg:min-h-[32.5rem] flex items-center justify-center"
    >
      <PinContainer title={live_link} href={live_link}>
        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] h-full overflow-hidden mb-10">
          <div className="relative size-full overflow-hidden rounded-3xl bg-[#13162d] h-[350px] md:h-[400px] flex items-center justify-center">
            <img src="/bg.png" alt="bg-img" className="absolute inset-0" />
          </div>
          <img
            src={img.src}
            alt={`image of ${title}`}
            className="absolute z-10  w-full  rounded-lg sm:bottom-[-16px] sm:w-[460px] sm:h-[300px] h-full sm:rotate-[4deg] sm:rounded-b-none object-cover object-left-top"
          />
        </div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>
        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
          {des}
        </p>
        <ProjectFooter tags={tags} live_link={source_code_link}></ProjectFooter>
      </PinContainer>
    </div>
  );
};

interface ProjectFooterProps {
  tags: TagType[];
  live_link: string;
}

const ProjectFooter = ({ tags, live_link }: ProjectFooterProps) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        {tags.map(({ icon, name }, index) => (
          <div
            key={icon.src}
            className="border border-white/[0.2] rounded-full bg-black lg:size-10 size-8 felx justify-center items-center"
            style={{ transform: `translateX(${-10 * index}px)` }}
          >
            <img
              src={icon.src}
              alt={icon.src}
              className="object-cover p-[6px]"
            />
          </div>
        ))}
      </div>
      <a
        className="relative flex justify-center items-center py-3 after:absolute after:content-[''] after:bottom-[8px] after:left-[50%] after:translate-x-[-50%]  after:h-[2px] after:bg-purple after:w-0 hover:after:w-full after:transition-[width] after:duration-200"
        href={live_link}
        target="_blank"
      >
        <p className="relative flex lg:text-xl md:text-xs text-sm text-purple">
          Check source code
        </p>
        <FaLocationArrow className="ms-3" color="#CBACF9"></FaLocationArrow>
      </a>
    </div>
  );
};

export default RecentProjects;
