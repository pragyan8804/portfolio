"use client";

import { useEffect, useState } from 'react';
import { Background } from '@/once-ui/components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ThemeToggler } from './components/ThemeToggler';

export default function Home() {
    const [selectedSection, setSelectedSection] = useState<string>("about");

    useEffect(() => {
        const sectionIds = ["about", "projects", "experience", "contact"];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelectedSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6, // 60% of the section must be visible for it to be considered active
            }
        );

        // Observe each section
        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        // Cleanup observer on unmount
        return () => {
            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Background dots={false} lines={false} />
            <Header selectedSection={selectedSection} />
            
            <div id='about'>
                <About />
            </div>

            <div id='projects'>
                <Projects />
            </div>

            <div id='experience'>
                <Experience />
            </div>

            <div id='contact'>
                <Footer />
            </div>
        </>
    );
}
