import {
    Heading,
    Flex,
    Text,
    Button,
    RevealFx,
    Icon,
    IconButton,
} from "@/once-ui/components";
import Image from "next/image";
import styles from "./about.module.scss";

export const About = () => {
    return (
        <>
            <Flex
                fillWidth
                marginTop="160"
                justifyContent="center"
                alignItems="center"
                className={styles.flexColumn}
            >
                {/* Row Flex: Two columns */}
                <Flex
                    direction="row"
                    gap="l"
                    alignItems="center"
                    justifyContent="center"
                    className={styles.flexColumn}
                >
                    {/* Left Column: Name and Description */}
                    <Flex
                        direction="column"
                        gap="m"
                        maxWidth="s"
                        alignItems="center"
                        className={`${styles.textAlign} ${styles.marginX}`}
                    >
                        {/* Name Heading */}
                        <RevealFx translateY="4">
                            <Heading
                                wrap="balance"
                                variant="display-strong-l"
                                paddingBottom="m"
                            >
                                Pragyan Pandey
                            </Heading>
                        </RevealFx>

                        {/* Description */}
                        <RevealFx translateY="8" delay={0.2}>
                            <Text
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="body-default-l"
                            >
                                Hey, I'm Pragyan. A passionate developer always
                                eager to learn and collaborate.
                            </Text>
                        </RevealFx>
                    </Flex>

                    {/* Right Column: Image */}
                    <Flex direction="column" gap="m" alignItems="center">
                        <RevealFx translateY="12" delay={0.4}>
                            <Image
                                src="/images/CodeImage.jpg"
                                alt="Placeholder image"
                                width="400"
                                height="250"
                                className={styles.image}
                            />
                        </RevealFx>
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="column" gap="m" alignItems="center" marginY="160">
                {/* Download CV Button */}
                <RevealFx translateY="16" delay={0.6}>
                    <Flex
                        className={styles.blockAlign}
                        style={{
                            backdropFilter: "blur(var(--static-space-1))",
                            border: "1px solid var(--brand-alpha-medium)",
                            width: "fit-content",
                        }}
                        alpha="brand-weak"
                        radius="full"
                        fillWidth
                        padding="8"
                        gap="8"
                        alignItems="center"
                        marginBottom="m"
                    >
                        <Flex paddingLeft="12">
                            <Icon name="cv" onBackground="brand-weak" />
                        </Flex>
                        <Flex paddingX="8">Download CV</Flex>
                        <a
                            href="/images/Pragyan'sResume.pdf"
                            download="Pragyan'sResume.pdf"
                        >
                            <IconButton
                                data-border="rounded"
                                variant="tertiary"
                                icon="chevronRight"
                            />
                        </a>
                    </Flex>
                </RevealFx>

                {/* Social Media Icons */}
                <RevealFx translateY="20" delay={0.8}>
                    <Flex
                        className={`${styles.blockAlign} ${styles.marginX}`}
                        paddingTop="20"
                        paddingBottom="8"
                        gap="8"
                        wrap
                        justifyContent="center"
                    >
                        <Button
                            href="https://www.github.com/pragyan8804"
                            prefixIcon="github"
                            label="github"
                            size="s"
                            variant="tertiary"
                        />
                        <Button
                            href="https://www.linkedin.com/in/pragyan-pandey-7ab72a222"
                            prefixIcon="linkedin"
                            label="linkedin"
                            size="s"
                            variant="tertiary"
                        />
                        <Button
                            href="mailto:pragyan8804@gmail.com"
                            prefixIcon="email"
                            label="email"
                            size="s"
                            variant="tertiary"
                        />
                    </Flex>
                </RevealFx>
            </Flex>
        </>
    );
};
