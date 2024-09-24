

import { Flex, ToggleButton } from "@/once-ui/components";
import styles from '@/app/components/Header.module.scss';
import { ThemeToggler } from "./ThemeToggler";

export const Header = ({ selectedSection }: { selectedSection: string }) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Flex style={{ height: 'fit-content' }}
            className={styles.position}
            position="fixed"
            as="header"
            zIndex={9}
            fillWidth padding="24"
            justifyContent="center">
            
            <Flex
                hide="s"
                paddingLeft="12" fillWidth
                alignItems="center"
                textVariant="body-default-s">
            </Flex>

            <Flex
                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-8" shadow="l"
                padding="8"
                justifyContent="center">
                
                <Flex gap="4" textVariant="body-default-s">
                    <ToggleButton
                        prefixIcon="person"
                        onClick={() => scrollToSection("about")}
                        selected={selectedSection === "about"}
                    >
                        <Flex paddingX="2" hide="s">About</Flex>
                    </ToggleButton>

                    <ToggleButton
                        prefixIcon="code"
                        onClick={() => scrollToSection("projects")}
                        selected={selectedSection === "projects"}
                    >
                        <Flex paddingX="2" hide="s">Projects</Flex>
                    </ToggleButton>

                    <ToggleButton
                        prefixIcon="briefcase"
                        onClick={() => scrollToSection("experience")}
                        selected={selectedSection === "experience"}
                    >
                        <Flex paddingX="2" hide="s">Experience</Flex>
                    </ToggleButton>

                    <ToggleButton
                        prefixIcon="email"
                        onClick={() => scrollToSection("contact")}
                        selected={selectedSection === "contact"}
                    >
                        <Flex paddingX="2" hide="s">Contact</Flex>
                    </ToggleButton>
                </Flex>
            </Flex>

            <Flex
                hide="s"
                paddingRight="12" fillWidth
                justifyContent="flex-end" alignItems="center"
                textVariant="body-default-s">
                {/* Optional additional elements */}
            </Flex>
            {/* <ThemeToggler /> */}
        </Flex>
    );
};
