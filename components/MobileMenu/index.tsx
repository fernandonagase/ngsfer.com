import {
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from '@chakra-ui/react'
import { HiXMark } from 'react-icons/hi2'

import ContactMe from '../ContactMe'
import SiteNavigation from '../SiteNavigation'
import Logo from '../Logo'

type MobileMenuProps = {
    isOpen: boolean
    onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader p="2xSm">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Logo />
                        <IconButton
                            aria-label="Fechar menu"
                            icon={<HiXMark />}
                            onClick={onClose}
                            size="lg"
                            fontSize="3xl"
                            variant="ghost"
                        />
                    </Flex>
                </ModalHeader>
                <ModalBody p="2xSm">
                    <Stack spacing="4xSm">
                        <SiteNavigation />
                        <div>
                            <Text textStyle="md" mb="1xSm">
                                Fale comigo:
                            </Text>
                            <ContactMe />
                        </div>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
