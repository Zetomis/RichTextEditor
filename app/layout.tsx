import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
