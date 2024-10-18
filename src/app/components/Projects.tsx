import {
    Heading,
    Flex,
    Text,
    SmartLink,
    SmartImage,
    Tag,
} from "@/once-ui/components";
import styles from "./projects.module.scss";

export const Projects = () => {
    return (
        <>
            {/* Heading */}
            <Flex
                style={{ position: "relative" }}
                justifyContent="center"
                alignItems="center"
                paddingTop="80"
                marginBottom="160"
            >
                <Heading variant="display-strong-l">Projects</Heading>
            </Flex>

            {/* MyJournal */}
            <Flex
                style={{ position: "relative" }}
                direction="row"
                gap="l"
                justifyContent="space-around"
                alignItems="center"
                className={styles.projectLayout}
                marginBottom="160"
                paddingBottom="80"
            >
                {/* Left Section: Project Name & Links */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.projectInfo}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading variant="display-strong-l">MyJournal</Heading>

                    {/* Smart Links */}
                    <Flex direction="row" gap="s" className={styles.smartLinks}>
                        <SmartLink
                            href="https://myjournals.vercel.app"
                            prefixIcon="link"
                        >
                            Live Project
                        </SmartLink>
                        <SmartLink
                            href="https://github.com/pragyan8804/myjournal"
                            prefixIcon="github"
                        >
                            GitHub
                        </SmartLink>
                    </Flex>
                </Flex>

                {/* Right Section: Project Description, Images, Tags */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.projectDetails}
                >
                    {/* Description */}
                    <Text variant="body-default-l">
                        MyJournal is a journaling app that allows users to log
                        their thoughts, goals, and daily activities. It features
                        theme customization, photo uploads, and end-to-end
                        encryption for secure journaling.
                    </Text>

                    {/* Project Screenshots */}
                    <Flex
                        direction="row"
                        gap="s"
                        className={styles.screenshots}
                    >
                        <SmartImage
                            src="/images/MyJournalLanding.png"
                            alt="Journal Screenshot 1"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                        <SmartImage
                            src="/images/MyJournalHome.png"
                            alt="Journal Screenshot 2"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                    </Flex>

                    {/* Technologies */}
                    <Flex direction="row" gap="s" className={styles.tags}>
                        <Tag label="Next.js" />
                        <Tag label="NextAuth" />
                        <Tag label="TailwindCSS" />
                        <Tag label="PrismaORM" />
                        <Tag label="PostgreSQL" />
                    </Flex>
                </Flex>
            </Flex>

            {/* Expenz */}
            <Flex
                style={{ position: "relative" }}
                direction="row"
                gap="l"
                justifyContent="space-around"
                alignItems="center"
                className={styles.projectLayout}
                marginBottom="160"
            >
                {/* Left Section: Project Name & Links */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.projectInfo}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading variant="display-strong-l">Expenz</Heading>

                    {/* Smart Links */}
                    <Flex direction="row" gap="s" className={styles.smartLinks}>
                        <SmartLink
                            href="https://expenz.vercel.app"
                            prefixIcon="link"
                        >
                            Live Project
                        </SmartLink>
                        <SmartLink
                            href="https://github.com/pragyan8804/expenz"
                            prefixIcon="github"
                        >
                            GitHub
                        </SmartLink>
                    </Flex>
                </Flex>

                {/* Right Section: Project Description, Images, Tags */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.projectDetails}
                >
                    {/* Description */}
                    <Text variant="body-default-l">
                        Expenz is a financial tracking app that helps users
                        monitor their expenses, split the bills, and get
                        insights into their spending habits.
                    </Text>

                    {/* Project Screenshots */}
                    <Flex
                        direction="row"
                        gap="s"
                        className={styles.screenshots}
                    >
                        <SmartImage
                            src="/images/ExpenzLanding.png"
                            alt="Expenz Screenshot 1"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                        <SmartImage
                            src="/images/ExpenzDashboard.png"
                            alt="Expenz Screenshot 2"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                    </Flex>

                    {/* Technologies */}
                    <Flex direction="row" gap="s" className={styles.tags}>
                        <Tag label="MongoDB" />
                        <Tag label="ExpressJs" />
                        <Tag label="ReactJs" />
                        <Tag label="NodeJs" />
                        {/* <Tag label="TyepScript" /> */}
                        <Tag label="TailwindCSS" />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};
