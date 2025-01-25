import React from "react";
import { IconType } from "react-icons/lib";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

interface TechCardProps {
  title: string;
  technologies: { Icon: IconType; technology: string }[];
}

const TechCard = ({ title, technologies }: TechCardProps) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Card className="min-w-[295px]">
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl font-extralight">{title}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="max-[768px]:justify-cente grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            {technologies.map(({ Icon, technology }) => (
              <div
                className="flex flex-1 items-center gap-2 rounded-full p-2 hover:bg-pear/5"
                key={technology}
              >
                {<Icon size={28} className="min-w-min text-pear-600" />}
                <p className="whitespace-nowrap">{technology}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechCard;
