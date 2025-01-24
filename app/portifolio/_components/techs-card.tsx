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
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl font-extralight">{title}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-1 max-[768px]:justify-center">
            {technologies.map(({ Icon, technology }) => (
              <div
                className="flex items-center gap-1 rounded px-3 py-2 hover:bg-pear-600/10"
                key={technology}
              >
                {<Icon size={30} className="text-pear-600" />}
                <p>{technology}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechCard;
