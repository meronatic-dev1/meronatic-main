import React from "react";
import { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
    title: "Services | Meronatic Solutions",
    description: "From high-performance SEO to enterprise web development. We build the systems that drive your revenue growth.",
};

export default function Page() {
    return <ServicesPage />;
}
