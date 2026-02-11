import React from "react";
import { Metadata } from "next";
import AboutPage from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Meronatic Solutions",
    description: "We are the architects of growth. Learn about our vision, mission, and the philosophy behind our performance-based approach.",
};

export default function Page() {
    return <AboutPage />;
}
