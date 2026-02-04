"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { TrendingUp, Target, Award, Megaphone, Monitor, LayoutTemplate, MousePointerClick, Zap, PieChart, Maximize } from "lucide-react";

interface Item {
    name: string;
    icon: React.ReactNode;
    color: string;
}

let services = [
    {
        name: "Growth Strategy",
        icon: <TrendingUp className="h-6 w-6 text-white" />,
        color: "#00C9A7",
    },
    {
        name: "Market Positioning",
        icon: <Target className="h-6 w-6 text-white" />,
        color: "#FFB800",
    },
    {
        name: "Brand Authority",
        icon: <Award className="h-6 w-6 text-white" />,
        color: "#FF3D71",
    },
    {
        name: "Demand Generation",
        icon: <Megaphone className="h-6 w-6 text-white" />,
        color: "#1E86FF",
    },
    {
        name: "Digital Platforms",
        icon: <Monitor className="h-6 w-6 text-white" />,
        color: "#9b59b6",
    },
    {
        name: "UI/UX Systems",
        icon: <LayoutTemplate className="h-6 w-6 text-white" />,
        color: "#2ecc71",
    },
    {
        name: "Conversion Optimization",
        icon: <MousePointerClick className="h-6 w-6 text-white" />,
        color: "#e67e22",
    },
    {
        name: "Performance Marketing",
        icon: <Zap className="h-6 w-6 text-white" />,
        color: "#e74c3c",
    },
    {
        name: "Data & Analytics",
        icon: <PieChart className="h-6 w-6 text-white" />,
        color: "#34495e",
    },
    {
        name: "Scale Operations",
        icon: <Maximize className="h-6 w-6 text-white" />,
        color: "#1abc9c",
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
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
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

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}
