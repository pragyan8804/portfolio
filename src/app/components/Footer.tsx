import { Flex, Heading, Text, IconButton } from "@/once-ui/components";
import { Background } from "@/once-ui/components/Background";

export const Footer = () => {
    return (
        <Flex
            style={{
                overflow: "hidden",
                maxWidth: "896px",
                padding: "5rem",
                margin: "0 auto",
                marginBottom: "5rem",
            }}
            position="relative"
            fillWidth
            padding="xl"
            radius="l"
            marginBottom="xl"
            direction="column"
            alignItems="center"
            align="center"
            background="surface"
            border="neutral-medium"
            borderStyle="solid-1"
        >
            <Background
                position="absolute"
                gradient={true}
                dots={false}
                lines={true}
            />

            <Heading
                style={{ position: "relative" }}
                marginBottom="m"
                variant="display-strong-s"
            >
                Let's Connect!
            </Heading>

            <Text
                style={{
                    position: "relative",
                    maxWidth: "var(--responsive-width-s)",
                    textAlign: "center",
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium"
            >
                Follow me on my social platforms and feel free to reach out if
                you'd like to collaborate or chat!
            </Text>

            <Flex gap="16" justifyContent="center">
                <IconButton
                    icon="github"
                    tooltip="GitHub"
                    href="https://github.com/your-profile"
                />
                <IconButton
                    icon="linkedin"
                    tooltip="LinkedIn"
                    href="https://www.linkedin.com/in/pragyan-pandey-7ab72a222"
                />
                <IconButton
                    icon="email"
                    tooltip="Email"
                    href="mailto:pragyan8804@gmail.com"
                />
            </Flex>
        </Flex>
    );
};
