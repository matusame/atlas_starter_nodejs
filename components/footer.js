import {
  Box,
  Link,
  LinkBox,
  Button,
  Flex,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import Section from '../components/section'
import NextLink from 'next/link'

const LinkItem = ({ children, href, target, ...props }) => {
  const path = '/' // Substitua '/' pelo valor correto do path
  const active = path === href
  const activeColor = useColorModeValue('#fff', '#fff')
  const inactiveColor = useColorModeValue('#fff', '#fff')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      fontWeight={active ? '500' : '400'}
      color={active ? activeColor : inactiveColor}
      target={target}
      {...props}
      fontSize={{ base: 14, md: 16, lg: 18 }}
    >
      {children}
    </Link>
  )
}

const Footer = props => {
  const { path } = props

  return (
    <Container bg="#181f17" color="#fafafa">
      <Container variant="content" py={{ base: '24px', md: '30px', xl: '8px' }}>
        <Section>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            py={{ base: 8, md: 16 }}
          >
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: '4xl', md: '5xl', xl: '6xl' }}
                fontWeight={900}
              >
                Vamos conversar
              </Heading>

              <Link href="mailto:ola@moskavo.com">
                <Button
                 py={{ base: 2, md: 4 }}
                  fontWeight="300"
                  fontSize={{ base: '1xl', md: '2xl', xl: '3xl' }}
                  color={useColorModeValue('#fff', '#fff')}
                  variant='link'
                >
                  ola@moskavo.com
                </Button>
              </Link>
            </Box>
            <Flex align="center" justify="center">
              <VStack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'flex', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="left"
                //flexGrow={1}
                spacing={4}
              >
                <LinkItem href="/clients" path={path}>
                  Clientes
                </LinkItem>
                <LinkItem href="/services" path={path}>
                  Serviços
                </LinkItem>
                <LinkItem href="/about" path={path}>
                  Sobre
                </LinkItem>
                <LinkItem href="/contato" path={path}>
                  Contato
                </LinkItem>
              </VStack>
            </Flex>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            pt={{ base: 0, md: 8 }}
          >
            <Box>
              <Text py={4} fontSize={{ base: 14, md: 16, lg: 18 }}>
                R. Urutau, 272 - Jardim Itália, Arapongas - PR 86701-450
              </Text>
            </Box>
            <Box align="center" justify="center">
              <LinkBox variant="link" spacing="6">
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button
                    colorScheme="dark"
                    leftIcon={<IoLogoGithub />}
                  ></Button>
                </Link>
                <Link href="https://twitter.com/moskavo" target="_blank" mr={2}>
                  <Button
                    colorScheme="dark"
                    leftIcon={<IoLogoTwitter />}
                  ></Button>
                </Link>
                <Link
                  href="https://instagram.com/moskavo"
                  target="_blank"
                  mr={2}
                >
                  <Button
                    colorScheme="dark"
                    leftIcon={<IoLogoInstagram />}
                  ></Button>
                </Link>
                <Link
                  href="https://instagram.com/moskavo"
                  target="_blank"
                  mr={2}
                >
                  <Button
                    colorScheme="dark"
                    leftIcon={<IoLogoDiscord />}
                  ></Button>
                </Link>
              </LinkBox>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            pt={{ base: 8, md: 12 }}
            color="#888"
          >
            <Box>
              <HStack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'flex', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="left"
                spacing={{ base: 4, md: 8 }}
                fontSize={{ base: 14, md: 16, lg: 18 }}
              >
                <LinkItem href="/clients" path={path} color="#888">
                  Termos de Privacidade
                </LinkItem>
                <LinkItem href="/services" path={path} color="#888">
                  Termos de Uso
                </LinkItem>
                <LinkItem href="/about" path={path} color="#888">
                  Sitemap
                </LinkItem>
              </HStack>
            </Box>
            <Box align="center" justify="center">
              <Text fontSize={{ base: 14, md: 16, lg: 18 }}>
                &copy; {new Date().getFullYear()} Moskavo
              </Text>
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Container>
  )
}

export default Footer
