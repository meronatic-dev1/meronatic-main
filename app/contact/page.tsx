import React from "react";
import { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Meronatic Solutions",
    description: "Ready to scale? Connect with our team to discuss how we can build your revenue engine.",
};

export default function Page() {
    return <ContactPage />;
}
