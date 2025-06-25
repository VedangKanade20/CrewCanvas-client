import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>CollabSpace - Collaborative Workspace</title>
                <meta
                    name="Collabspace"
                    content="The all-in-one collaboration platform for modern teams"
                />
            </head>
            <body className={`antialiased ${raleway.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
