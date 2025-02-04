import Link from "next/link";

import { Button } from "@/app/_components/ui/button";
import EnterAnimation from "@/app/_components/ui/enter-animation";

interface EducationCardProps {
  type?: string;
  education: string;
  organization: string;
  startDate: string;
  endDate: string;
  buttonHref?: string;
}

const EducationCard = ({
  type = "CURSO",
  education,
  organization,
  startDate,
  endDate,
  buttonHref,
}: EducationCardProps) => {
  return (
    <EnterAnimation>
      <div className="flex h-full flex-col rounded-2xl bg-neutral-200 p-10 transition-all duration-300 hover:scale-[1.01] dark:bg-neutral-900">
        <div className="relative flex min-h-[200px] flex-1 flex-col justify-between space-y-6 py-8">
          <span className="absolute right-0 top-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase text-neutral-500 dark:text-neutral-800">
            {type}
          </span>
          <div className="space-y-2">
            <h2 className="text-3xl font-light">{education}</h2>
            <p className="inline-block rounded-full bg-neutral-900 px-3 py-1 text-center text-sm font-medium text-pear-600 dark:p-0">
              {organization}
            </p>
          </div>

          <div className="flex flex-col text-right text-neutral-500 dark:text-[#999]">
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
        </div>

        {buttonHref && (
          <Button
            className="mt-auto w-full transition-colors duration-300 hover:bg-pear-600 hover:text-inherit hover:shadow-[0_0_35px_-10px] hover:shadow-pear-600 dark:hover:bg-pear-700"
            asChild
          >
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
