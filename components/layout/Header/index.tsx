import {
    Box,
    Hide,
    IconButton,
    Stack,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react'
import { HiBars2 } from 'react-icons/hi2'

import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import useRouteChange from '@/hooks/useRouteChange'

export default function Header() {
    const isLargerThanSm = useBreakpointValue({
        base: false,
        sm: true,
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    useRouteChange(onClose)

    return (
        <Box as="header" mb="4xSm">
            <Stack
                direction="row"
                align="center"
                justify="space-between"
                px={['2xSm', '2x']}
                py="2xSm"
            >
                <Logo />
                <Hide above="sm">
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
            {(isLargerThanSm || isOpen) && (
                <Menu isOpen={isOpen} onClose={onClose} />
            )}
        </Box>
    )
}
