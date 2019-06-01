import React, { Suspense } from "react";
import { hocCreator } from "./hoc-wrapper";

const useSuspense = Component =>
  hocCreator(Suspense, {
    fallback: <Component />
  });

export { Suspense, useSuspense };
