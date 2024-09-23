
import { Flex, Heading } from "@/once-ui/components";

export const Projects = () => {
    return (
        <Flex fillWidth style={{ minHeight: '100vh' }} 
            justifyContent="center" 
            alignItems="center"
        >
            <Heading variant="display-strong-xs"
                style={{ position: 'relative' }}>
                Projects Section
            </Heading>
        </Flex>
    );
};
