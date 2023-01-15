import React, { ReactElement, ReactNode } from "react";
import Flex from "./ui/Flex";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({
  children,
}: PageLayoutProps): ReactElement {
  return <Flex>{children}</Flex>;
}
