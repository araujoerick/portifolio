import Link from "next/link";
import React from "react";

import { Button, ButtonProps } from "./button";

const ButtonDownloadCv = ({
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Button {...props} className="bg-inherit" asChild>
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
