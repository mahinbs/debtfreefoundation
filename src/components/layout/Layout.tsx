import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
