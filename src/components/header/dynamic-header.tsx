"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

export const DynamicHeader = dynamic(
  () => import("./header").then((comp) => comp.Header),
  {
    ssr: false,
    loading: () => <Skeleton className="p-4 shadow h-[82px]" />,
  }
);
