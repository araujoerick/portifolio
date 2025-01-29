import Link from "next/link";

import { Button } from "@/app/_components/ui/button";
import EnterAnimation from "@/app/_components/ui/enter-animation";

interface EducationCardProps {
  education: string;
  organization: string;
  startDate: string;
  endDate: string;
  buttonHref?: string;
}

const EducationCard = ({
  education,
  organization,
  startDate,
  endDate,
  buttonHref,
}: EducationCardProps) => {
  return (
    <EnterAnimation>
      <div className="flex justify-between gap-4 rounded-2xl border p-6 transition-all duration-500 hover:scale-[1.01]">
        <div className="space-y-4">
          <div>
            <h2 className="text-3xl font-extralight">{education}</h2>
            <p className="font-medium text-pear-600">{organization}</p>
          </div>
          <div className="space-x-2">
            <span className="after:ml-2 after:inline-block after:h-3 after:w-3 after:rounded-full after:bg-pear-600 after:content-['']">
              {startDate}
            </span>
            <span>{endDate}</span>
          </div>
        </div>
        {buttonHref && (
          <Button variant="outline" className="self-end" asChild>
            <Link target="_blank" rel="noopener noreferrer" href={buttonHref}>
              Certificado
            </Link>
          </Button>
        )}
      </div>
    </EnterAnimation>
  );
};

export default EducationCard;
