import {
  Container,
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Link,
  Button,
  LinkBox,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'

const About = () => {
  return (
    <Layout title="about">
      <Container mb="100px" maxW="container.xl" py={{base:"100px",md:"160px"}}>
        <Section>
          <Box display={{ md: 'flex' }} mb="10%">
            <Box flex="1" mr="50px">
              <Heading as="h1" fontSize="5xl" variant="section-title" mb="40px">
                Hello, I’m Mathias Silva, designer & developer.
              </Heading>
              <Text fontSize="2xl">
                My work is mainly focused on third-dimension modeling, texturing
                and rendering. I like exploring the creatures with a touch of
                dark surrealism for characters and production.
                <br />
                <br />
                Now I’m an interactive media design student in Istanbul ⏤
                currently freelancing and seeking internship opportunities.
              </Text>
            </Box>
            <Box flex="1">
              <Image
                maxWidth="70%"
                ml="50px"
                display="inline-block"
                src="
                        https://images.unsplash.com/photo-1615925684564-bf84fea53325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        "
                alt="moskavo"
              />
            </Box>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Flex my="10%">
            <Box flex="1">
              <Heading
                as="h2"
                fontSize="md"
                textDecoration="underline"
                mb="40px"
                variant="section-title"
              >
                Main Software
              </Heading>
            </Box>
            <Box flex="2" display="flex">
              <LinkBox>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Figma
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Adobe XD
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Wordpress
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Photoshop
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Illustrator
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Blender
                  </Button>
                </Link>
              </LinkBox>
            </Box>
          </Flex>
        </Section>

        <Section delay={0.1}>
          <Flex my="10%">
            <Box flex="1">
              <Heading
                as="h2"
                fontSize="md"
                textDecoration="underline"
                mb="40px"
                variant="section-title"
              >
                Main Skills
              </Heading>
            </Box>
            <Box flex="2" display="flex">
              <LinkBox>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    React.js
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Python
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Node.js
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Javascript
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    MySQL
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    CSS
                  </Button>
                </Link>
                <Link href="https://github.com/moskavo" target="_blank" mr={2}>
                  <Button fontWeight="100" variant="link" colorScheme="dark">
                    Bootstrap
                  </Button>
                </Link>
              </LinkBox>
            </Box>
          </Flex>
        </Section>
        <Divider my={20} />
        <Section>
          <Flex display="flex">
            <Box flex="2">
              <LinkBox>
                <Link
                  fontSize={30}
                  color={useColorModeValue('#0c0c0c', '#f7f7f7')}
                  href="/contact"
                >
                  I am thrilled to answer to your next project
                  <ChevronRightIcon />
                </Link>
              </LinkBox>
            </Box>
            <Box flex="1">
              <LinkBox>
                <Link href="mailto:hello@moskavo.com">
                  <Button
                    variant="link"
                    fontWeight="300"
                    fontSize={24}
                    color={useColorModeValue('#0c0c0c', '#f7f7f7')}
                  >
                    hello@moskavo.com
                  </Button>
                </Link>
              </LinkBox>

              <LinkBox my="10%">
                <Link href="/rsume">
                  <Button variant="link" fontWeight="100" colorScheme="dark">
                    View resume
                  </Button>
                </Link>
              </LinkBox>
            </Box>
          </Flex>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
export { getServerSideProps } from '../components/chakra'
