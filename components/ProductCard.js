// components/ProductCard.js
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Select,
  SimpleGrid
} from '@chakra-ui/react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import NextLink from 'next/link'

const ProductCard = ({ id, name, price, imageUrl, stock }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart, removeFromCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageUrl }, quantity)
    // Lógica adicional, como exibir uma notificação de sucesso
  }

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <NextLink href={`/product/${id}`} passHref>
        <Image src={imageUrl} alt={name} cursor="pointer" />
      </NextLink>
      <Box p="6">
        <NextLink href={`/product/${id}`} passHref>
          <Heading fontWeight={400} as="h4" size="sm" mb="2" cursor="pointer">
            {name}
          </Heading>
        </NextLink>
        <Text fontWeight={500} mt="2" size="sm">
          R${price}{' '}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={{ base: 2, md: 8, lg: 8 }}>
          <Select
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            mt={{ base: 2, md: 4, lg: 4 }}
            mb={{ base: 0, md: 2, lg: 2 }}
          >
            {[...Array(stock).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
          <Button
            colorScheme="teal"
            mt={{ base: 2, md: 4, lg: 4 }}
            onClick={handleAddToCart}
          >
            Adicionar
          </Button>
          <Button colorScheme="red" onClick={handleRemoveFromCart} mt={2}>
          Remover
        </Button>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default ProductCard
