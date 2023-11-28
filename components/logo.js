import Link from 'next/link'
import { Text, Center } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  img {
    transition: 250ms;
  }

  &:hover img {
    transform: translateY(-5px);
  }
`

const Logo = () => {
  //const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Center>
      <Link legacyBehavior href="/" scroll={false}>
        <a>
          <LogoBox>
            <Text fontWeight={700}
            color="whiteAlpha.900"
              fontSize="1.2rem"
              letterSpacing="1px"
              variant="logo"
            >Orgânicos Delivery</Text>
          </LogoBox>
        </a>
      </Link>
    </Center>

  )
}

export default Logo
