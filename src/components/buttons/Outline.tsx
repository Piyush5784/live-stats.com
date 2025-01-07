import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import clsx from "clsx";

const Outline = ({
  classNames,
  children,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <Button
      variant={"outline"}
      className={clsx(
        `border-green-600 hover:bg-green-300 hover:bg-opacity-10`,
        classNames
      )}
    >
      {children}
    </Button>
  );
};

export default Outline;
