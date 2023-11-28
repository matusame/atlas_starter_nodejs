import {
  Container,
  Box,
  Text,
  Heading,
  Image,
  Link,
  Button,
  LinkBox,
  useColorModeValue,
  SimpleGrid,
  Center
} from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contato = () => {
  return (
    <Layout title="Contato">
      <Container py={{ base: '100px', md: '100px' }} variant="main" height="100%" overflow="hidden">
        <Section>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={16}
            pt={{ base: 4, md: 16, xl: 8 }}
            height="100%" overflow="hidden"
          >
            <Center>
              <Box flex="1">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '6xl' }}
                  variant="section-title"
                  mb="16px"
                  fontWeight={700}
                >
                  Vamos conversar
                </Heading>
                <Text fontSize={{ base: '1xl', md: '2xl' }}>
                  Adoraríamos saber mais sobre você e sobre o que podemos criar
                  e desenvolver juntos.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} flex="1" py={16}>
                  <LinkBox pt={4}>
                    <Heading
                      as="h2"
                      fontSize={{ base: '1xl', md: '3xl' }}
                      spacing={16}
                      color="#555"
                      fontWeight={500}
                    >
                      Seja nosso cliente
                    </Heading>
                    <Link href="mailto:hello@moskavo.com">
                      <Button
                        variant="link"
                        fontWeight="300"
                        fontSize={24}
                        color={useColorModeValue('#0c0c0c', '#f7f7f7')}
                        py={4}
                      >
                        ola@moskavo.com
                      </Button>
                    </Link>
                  </LinkBox>
                  <LinkBox pt={4}>
                    <Heading
                      as="h2"
                      fontSize={{ base: '1xl', md: '3xl' }}
                      spacing={16}
                      color="#555"
                      fontWeight={500}
                    >
                      Trabalhe conosco
                    </Heading>
                    <Link href="mailto:hello@moskavo.com">
                      <Button
                        variant="link"
                        fontWeight="300"
                        fontSize={24}
                        color={useColorModeValue('#0c0c0c', '#f7f7f7')}
                        py={4}
                      >
                        jobs@moskavo.com
                      </Button>
                    </Link>
                  </LinkBox>
                </SimpleGrid>
                <Box align="left" justify="center" pb={14}>
                  <LinkBox variant="link" >
                    <Link
                      href="https://github.com/moskavo"
                      target="_blank"
                      mr={2}
                    >
                      <Button
                        size="lg"
                        colorScheme="gray"
                        leftIcon={<IoLogoGithub />}
                      ></Button>
                    </Link>
                    <Link
                      href="https://twitter.com/moskavo"
                      target="_blank"
                      mr={2}
                    >
                      <Button
                        size="lg"
                        colorScheme="gray"
                        leftIcon={<IoLogoTwitter />}
                      ></Button>
                    </Link>
                    <Link
                      href="https://instagram.com/moskavo"
                      target="_blank"
                      mr={2}
                    >
                      <Button
                        size="lg"
                        colorScheme="gray"
                        leftIcon={<IoLogoInstagram />}
                      ></Button>
                    </Link>
                    <Link
                      href="https://instagram.com/moskavo"
                      target="_blank"
                      mr={2}
                    >
                      <Button
                        size="lg"
                        colorScheme="gray"
                        leftIcon={<IoLogoDiscord />}
                      ></Button>
                    </Link>
                  </LinkBox>
                </Box>
                <Box>
                  <Text fontSize={{ base: 14, md: 16, lg: 18 }}>
                    R. Urutau, 272 - Jardim Itália, Arapongas - PR 86701-450
                  </Text>
                </Box>
              </Box>
            </Center>

            <Center flex="1">
              <Image
                maxWidth="70%"
                ml="50px"
                display={{ base: 'none', md: 'inline-block' }}
                src="
                          https://images.unsplash.com/photo-1615925684564-bf84fea53325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                          "
                alt="moskavo"
              />
            </Center>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contato
export { getServerSideProps } from '../components/chakra'
