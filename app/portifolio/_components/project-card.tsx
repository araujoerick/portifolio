import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/app/_components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techs: string[];
  githubLink: string;
  deployLink: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  techs,
  githubLink,
  deployLink,
}: ProjectCardProps) => {
  return (
    <div className="flex max-w-[448px] flex-col rounded-lg border transition-all duration-500 hover:scale-[1.02] dark:border-none dark:bg-neutral-900">
      <div className="max-h-[230px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          unoptimized
          className="overflow-hidden rounded-t-lg object-cover transition-all duration-500 hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="space-y-2">
          <h3 className="text-3xl font-light">{title}</h3>
          <p>{description}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                className="rounded-full border border-pear-500 px-2 py-1 text-xs font-medium hover:bg-pear-600/25 dark:border-inherit dark:text-pear-600 dark:hover:bg-pear-600/5"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4 pt-0">
        <Button
          className="flex-1 transition-colors duration-300 hover:bg-pear-600 hover:text-inherit hover:shadow-[0_0_35px_-10px] hover:shadow-pear-600 dark:hover:bg-pear-700"
          asChild
        >
          <Link target="_blank" rel="noopener noreferrer" href={githubLink}>
            Github
          </Link>
        </Button>
        <Button
          className="flex-1 transition-colors duration-300 hover:bg-pear-600 hover:text-inherit hover:shadow-[0_0_35px_-10px] hover:shadow-pear-600 dark:hover:bg-pear-700"
          asChild
        >
          <Link target="_blank" rel="noopener noreferrer" href={deployLink}>
            Deploy
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
