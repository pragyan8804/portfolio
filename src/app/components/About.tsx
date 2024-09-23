
import { Flex, Heading } from '@/once-ui/components';

export const About = () => {
    return (
        <Flex fillWidth style={{ minHeight: '100vh' }} 
            justifyContent="center" 
            alignItems="center"
        >
           <Heading style={{ position: 'relative' }}
                variant="display-strong-xs"
            >
                About
            </Heading>
        </Flex>
    );
};
