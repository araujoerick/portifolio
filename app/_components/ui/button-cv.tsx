import Link from "next/link";

import { cn } from "@/app/_lib/utils";

import { Button, ButtonProps } from "./button";

interface ButtonDownloadCvProps extends ButtonProps {
  className?: string;
}

const ButtonDownloadCv = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<ButtonDownloadCvProps>) => {
  return (
    <Button
      {...props}
      className={cn("p-2 text-xs sm:text-sm", className)}
      asChild
    >
      <Link
        href="/docs/araujoerick-curriculo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        {children}
      </Link>
    </Button>
  );
};

export default ButtonDownloadCv;
