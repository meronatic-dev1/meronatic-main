import React from "react";
import { Metadata } from "next";
import ApproachPage from "./ApproachClient";

export const metadata: Metadata = {
    title: "The Ascend Framework | Meronatic Solutions",
    description: "Discover our proprietary methodology for business transformation. Discovery, Execution, Evolution.",
};

export default function Page() {
    return <ApproachPage />;
}
