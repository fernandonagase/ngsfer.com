import {
    Box,
    Hide,
    IconButton,
    Stack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import { HiBars2 } from 'react-icons/hi2'

import Logo from '@/components/Logo'
import MobileMenu from '@/components/MobileMenu'
import useRouteChange from '@/hooks/useRouteChange'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useRouteChange(onClose)

    const bgcolor = useColorModeValue('white', 'white')

    return (
        <Box
            as="header"
            mb={['4xSm', null, null, '2x']}
            px={[null, null, null, '4x']}
            py={[null, null, null, '2x']}
            pos={[null, null, null, 'sticky']}
            top={[null, null, null, 0]}
            left={[null, null, null, 0]}
            bgColor={bgcolor}
        >
            <Stack
                direction="row"
                align="center"
                justify="space-between"
                px={['2xSm', null, null, 0]}
                py={['2xSm', null, null, 0]}
            >
                <Logo />
                <Hide above="lg">
                    <IconButton
                        aria-label="Abrir Menu"
                        icon={<HiBars2 />}
                        onClick={onOpen}
                        size="lg"
                        fontSize="3xl"
                        variant="ghost"
                        color="body-text"
                    />
                </Hide>
            </Stack>
            <Hide above="lg">
                <MobileMenu isOpen={isOpen} onClose={onClose} />
            </Hide>
        </Box>
    )
}
