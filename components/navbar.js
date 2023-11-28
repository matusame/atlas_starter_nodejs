import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Badge,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { BsBasket, BsPerson, BsQuestionCircle } from 'react-icons/bs'

import { useCart } from '../contexts/CartContext'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const activeColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')
  const inactiveColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      fontWeight={active ? '600' : '500'}
      color={active ? activeColor : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { cart } = useCart()

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const { path } = props
  const [scrolling, setScrolling] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (!scrolling) {
          setScrolling(true)
          controls.start({ opacity: 0 })
        }
      } else {
        if (scrolling) {
          setScrolling(false)
          controls.start({ opacity: 1 })
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scrolling])

  useEffect(() => {
    // Adicione este novo useEffect para restaurar a barra de navegação quando a posição voltar ao topo.
    const handleScrollTop = () => {
      if (window.scrollY === 0) {
        setScrolling(false)
        controls.start({ opacity: 1 })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScrollTop)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScrollTop)
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ opacity: { duration: 0.2 } }}
      style={{ width: '100%', position: 'fixed', top: 0, zIndex: 100 }}
    >
      <Box
        position="fixed"
        as="nav"
        w="100%"
        css={{ backdropFilter: 'blur(4px)' }}
        backgroundColor="#448939"
        zIndex={2}
        {...props}
        //borderBottom="1px solid"
        //borderColor="#e6e7e7"
        py={6}
      >
        <Container
          display="flex"
          p={2}
          maxW="1440px"
          wrap="wrap"
          align="center"
          justify="space-between"
          px={{
            base: '24px',
            md: '30px',
            xl: '40px'
          }}
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>

          <Box flex={1} align="right" mx={{ base: 0, md: 16 }}>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu
                isLazy
                id="navbar-menu"
                bg={useColorModeValue('#f0e7db', '#000')}
              >
                <SimpleGrid columns={{ base: 2 }}>
                  <MenuItem
                    as={MenuLink}
                    href="/cart"
                    aria-label="Carrinho"
                  >
                    <Icon h={6} w={6} as={BsBasket} />{' '}
                    <Badge colorScheme="green">{totalItemsInCart}</Badge>
                  </MenuItem>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                </SimpleGrid>
                <MenuList
                  fontWeight={600}
                  bg={useColorModeValue('#f0e7db', '#202023')}
                >
                  <MenuItem py={4} as={MenuLink} href="/ajuda">
                    Ajuda
                  </MenuItem>
                  <MenuItem py={4} as={MenuLink} href="/conta">
                    Minha Conta
                  </MenuItem>
                  <MenuItem py={4} as={MenuLink} href="/cart">
                    <Icon as={BsBasket} />{' '}
                    <Badge colorScheme="green">{totalItemsInCart}</Badge>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            //flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={8}
          >
            <LinkItem href="/ajuda" path={path}>
              <Icon w={4} h={4} mr={2} as={BsQuestionCircle} />
              Ajuda
            </LinkItem>
            <LinkItem href="/conta" path={path}>
              <Icon w={4} h={4} mr={2} as={BsPerson} />
              Minha Conta
            </LinkItem>
            <LinkItem href="/cart" path={path}>
              <Icon w={4} h={4} mr={2} as={BsBasket} />
              Carrinho <Badge colorScheme="green">{totalItemsInCart}</Badge>
            </LinkItem>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Navbar
