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
                    <ul className={styles.bullets}>
                        <li>
                            Developed a robust user authentication system,
                            enabling secure sign-up and login processes to
                            protect user data.
                        </li>
                        <li>
                            Integrated cloud storage solutions to ensure that
                            users' journal entries, images, and settings are
                            safely stored and easily retrievable.
                        </li>
                        <li>
                            Implemented a customizable theme feature, allowing
                            users to personalize their journaling experience
                            with various styles and colors.
                        </li>
                    </ul>

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
                    <ul className={styles.bullets}>
                        <li>
                            Developed comprehensive data visualization tools,
                            including charts and graphs, to provide users with
                            insights into their spending patterns.
                        </li>
                        <li>
                            Implemented a bill-splitting feature that allows
                            users to easily share expenses with friends and
                            family, simplifying group payments.
                        </li>
                        <li>
                            Integrated a budgeting tool that helps users set and
                            track their financial goals, promoting better money
                            management practices.
                        </li>
                    </ul>

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
