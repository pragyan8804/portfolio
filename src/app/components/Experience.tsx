import { Heading, Flex, Text, SmartImage, Tag } from "@/once-ui/components";
import styles from "./experience.module.scss";

export const Experience = () => {
    return (
        <>
            {/* Work Experience Heading */}
            <Flex
                style={{ position: "relative" }}
                justifyContent="center"
                alignItems="center"
                paddingTop="80"
                marginBottom="160"
            >
                <Heading variant="display-strong-l">Work Experience</Heading>
            </Flex>

            {/* Entelika Experience */}
            <Flex
                style={{ position: "relative" }}
                direction="row"
                gap="l"
                justifyContent="space-between"
                alignItems="flex-start"
                className={styles.experienceLayout}
            >
                {/* Left Section: Company Info and Details */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.companyInfo}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Heading variant="display-strong-l">Entelika</Heading>
                    <Text variant="body-default-l" className={styles.role}>
                        Summer Intern
                    </Text>
                    <Text variant="body-default-l" className={styles.date}>
                        May 2024 - July 2024
                    </Text>
                </Flex>

                {/* Right Section: Bullet Points and Images */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.bulletPointsSection}
                    marginBottom="160"
                >
                    {/* Bullet Points */}
                    <ul className={styles.bullets}>
                        <li>
                            Created the official website for Entelika with a
                            modern design, enhancing user experience and
                            improving performance.
                        </li>
                        <li>
                            Developed the Hackathon website for Entelika to
                            streamline event registration and increase
                            engagement.
                        </li>
                    </ul>

                    {/* Images */}
                    <Flex direction="row" gap="s" className={styles.images}>
                        <SmartImage
                            src="/images/Entelika.png"
                            alt="Entelika Official Website"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                        <SmartImage
                            src="/images/EntelikaHackathon.png"
                            alt="Entelika Hackathon Website"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                    </Flex>

                    {/* Technologies */}
                    <Flex direction="row" gap="s" className={styles.tags}>
                        <Tag label="ReactJS" />
                        <Tag label="TailwindCSS" />
                        <Tag label="MicrosoftAzure" />
                    </Flex>
                </Flex>
            </Flex>

            {/* TieOpp Experience */}
            <Flex
                style={{ position: "relative" }}
                direction="row"
                gap="l"
                justifyContent="space-between"
                alignItems="flex-start"
                className={styles.experienceLayout}
            >
                {/* Left Section: Company Info and Details */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.companyInfo}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Heading variant="display-strong-l">TieOpp</Heading>
                    <Text variant="body-default-l" className={styles.role}>
                        App Developer Intern
                    </Text>
                    <Text variant="body-default-l" className={styles.date}>
                        Sept 2024 - Dec 2024
                    </Text>
                </Flex>

                {/* Right Section: Bullet Points and Images */}
                <Flex
                    direction="column"
                    gap="m"
                    className={styles.bulletPointsSection}
                    marginBottom="160"
                >
                    {/* Bullet Points */}
                    <ul className={styles.bullets}>
                        <li>
                            Designed and developed a student mobile application
                            using React Native, improving accessibility and user
                            engagement.
                        </li>
                        <li>
                            Integrated core functionalities and ensured smooth
                            performance across multiple devices (ios and
                            android).
                        </li>
                    </ul>

                    {/* Images */}
                    <Flex direction="row" gap="s" className={styles.images}>
                        {/* <SmartImage
                            src="/images/Entelika.png"
                            alt="TieOpp Student App"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                        <SmartImage
                            src="/images/EntelikaHackathon.png"
                            alt="TieOpp Student App"
                            enlarge
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        /> */}
                    </Flex>

                    {/* Technologies */}
                    <Flex direction="row" gap="s" className={styles.tags}>
                        <Tag label="React Native" />
                        <Tag label="Expo" />
                        <Tag label="NativeWind" />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};
