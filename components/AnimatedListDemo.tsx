"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Code2, Smartphone, Palette, LineChart, Megaphone, Award, SearchCheck, Bot, Pencil } from "lucide-react";

interface Item {
    name: string;
    icon: React.ReactNode;
    color: string;
}

let services = [
    {
        name: "Web Development",
        icon: <Code2 className="h-6 w-6 text-white" />,
        color: "#9b59b6",
    },
    {
        name: "Mobile App Development",
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: "#1E86FF",
    },
    {
        name: "UI/UX Design",
        icon: <Palette className="h-6 w-6 text-white" />,
        color: "#2ecc71",
    },
    {
        name: "Data & Analytics",
        icon: <LineChart className="h-6 w-6 text-white" />,
        color: "#34495e",
    },
    {
        name: "Digital Marketing",
        icon: <Megaphone className="h-6 w-6 text-white" />,
        color: "#e74c3c",
    },
    {
        name: "Branding",
        icon: <Award className="h-6 w-6 text-white" />,
        color: "#FF3D71",
    },
    {
        name: "SEO Optimization",
        icon: <SearchCheck className="h-6 w-6 text-white" />,
        color: "#e67e22",
    },
    {
        name: "Automation",
        icon: <Bot className="h-6 w-6 text-white" />,
        color: "#1abc9c",
    },
    {
        name: "Content Creation",
        icon: <Pencil className="h-6 w-6 text-white" />,
        color: "#FFB800",
    },
];

services = Array.from({ length: 5 }, () => services).flat();

const Notification = ({ name, icon, color }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-background dark:bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                        <span className="text-sm sm:text-lg">{name}</span>
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
                className,
            )}
        >
            <AnimatedList delay={2000}>
                {services.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>


        </div>
    );
}
