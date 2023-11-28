import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container variant="principal" >
      <Heading as="h1" fontSize={{ base: "8xl", md: "9xl", lg:"140px", xl: "200px", }} mb="-20px" variant="page-title" align="center">404</Heading>
      <Heading as="h2" fontSize={{ base: "4xl", md: "4xl", lg:"40px", xl: "70px", }}  align="center"  mb="20px">Not found</Heading>
      <Text  align="center">The page you&apos;re looking for was not found.</Text>
      <Divider my={14} py="50px" borderColor="transparent" />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button  variant="link" fontWeight="100" colorScheme="dark">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound

