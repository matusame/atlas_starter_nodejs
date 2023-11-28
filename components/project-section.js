import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  LinkBox,
  Button,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Center,
  Icon,
  Stack,
  Flex,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FiArrowUpRight } from 'react-icons/fi'
import { useRef } from 'react'

const ImageBox = styled.span`
  display: inline-flex;
  img {
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(0.97);
  }
`
export const ProjectItemRight = ({ id, title, thumbnail, tag, skill }) => {
  const ref = useRef(null);
  return (
    <Center py={{ base: 10, md: 24 }} zIndex={2} ref={ref} >
        <SimpleGrid column={{ base: 1, md: 2 }} display={{ base: "block", md: "flex" }}>
          <Flex flex={1}>
            <ImageBox>
              <Box>
                <LinkBox cursor="pointer">
                  <NextLink href={`/works/${id}`}>
                    <Image
                      src={thumbnail}
                      alt={title}
                      placeholder="blur"
                    />
                  </NextLink>
                </LinkBox>
              </Box>
            </ImageBox>
          </Flex>
          <Flex flex={1}>
            <Center
              ml={{ base: "0px", md: "40px" }}
              zIndex={1} flexDirection={{ base: "column", md: "column" }} alignItems="left">
              <Heading
                my={1}
                fontSize={{ base: 14, md: 16, xl: 20 }}
                fontWeight="400"
                color={useColorModeValue('#111', '#9f9f9f')}
                align="left"
              >
                {tag}
              </Heading>
              <Heading
                fontSize={{ base: "24px", md: "30px", xl: "4xl" }}
                style={{ textTransform: 'uppercase' }}
                align="left"
                as="a"
                href={`/works/${id}`}
              >

                {title}

              </Heading>
              <LinkBox cursor="pointer">
                <NextLink href={`/works/${id}`}>
                  <Button my={{ base: "5%", md: "5%" }} fontSize={{ base: 16, md: 16, xl: 20 }} fontWeight='600' variant="link">
                    More from this project
                    <Icon as={FiArrowUpRight} fontSize={{ base: 22, md: 24 }} align="center" ml={{ base: 1, md: 1 }} />
                  </Button>
                </NextLink>
              </LinkBox>
              <Stack display="flex" direction={{ base: 'row' }} pt={2}>
                {skill}
              </Stack>
            </Center>
          </Flex>
        </SimpleGrid>
    </Center>
  )
}


export const ProjectItemLeft = ({ id, title, thumbnail, tag, skill }) => {
  const ref = useRef(null);

  return (
    <Center py={{ base: 10, md: 24 }} zIndex={2} ref={ref}>
        <SimpleGrid column={{ base: 1, md: 2 }} display={{ base: "block", md: "flex" }}>
          <Flex flex={1} display={{ base: "flex", md: "none" }}>
            <ImageBox>
              <Box>
                <LinkBox cursor="pointer">
                  <NextLink href={`/works/${id}`}>
                    <Image
                      src={thumbnail}
                      alt={title}
                      placeholder="blur"
                    />
                  </NextLink>
                </LinkBox>
              </Box>
            </ImageBox>
          </Flex>
          <Flex flex={1}>
            <Center
              ml={{ base: "0px", md: "40px" }}
              zIndex={1} flexDirection={{ base: "column", md: "column" }} alignItems="left">
              <Heading
                my={1}
                fontSize={{ base: 14, md: 16, xl: 20 }}
                fontWeight="400"
                color={useColorModeValue('#111', '#9f9f9f')}
                align="left"
              >
                {tag}
              </Heading>
              <Heading
                fontSize={{ base: "24px", md: "30px", xl: "4xl" }}
                style={{ textTransform: 'uppercase' }}
                align="left"
                as="a"
                href={`/works/${id}`}
              >
                {title}
              </Heading>
              <LinkBox cursor="pointer">
                <NextLink href={`/works/${id}`}>
                  <Button my={{ base: "5%", md: "5%" }} fontSize={{ base: 16, md: 16, xl: 20 }} fontWeight='600' variant="link">
                    More from this project
                    <Icon as={FiArrowUpRight} fontSize={{ base: 22, md: 24 }} align="center" ml={{ base: 1, md: 1 }} />
                  </Button>
                </NextLink>
              </LinkBox>
              <Stack display="flex" direction={{ base: 'row' }} pt={2}>
                {skill}
              </Stack>
            </Center>
          </ Flex>
          <Flex flex={1} display={{ base: "none", md: "flex" }}>
            <ImageBox>
              <Box
              >
                <LinkBox cursor="pointer">
                  <NextLink href={`/works/${id}`}>
                    <Image
                      src={thumbnail}
                      alt={title}
                      placeholder="blur"
                    />
                  </NextLink>
                </LinkBox>
              </Box>
            </ImageBox>
          </Flex>
        </SimpleGrid>
    </Center>
  )
}