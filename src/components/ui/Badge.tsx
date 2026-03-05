"use client";

import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
    return (
        <div
            className={`mb-3 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-600 uppercase dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400 ${className}`}
        >
            {children}
        </div>
    );
}
