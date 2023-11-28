// pages/product/[id].js
import { Box, Heading, Text, Image, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '../../components/layouts/product'

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query // Obtém o ID do produto da URL

  // Simule dados do produto (substitua com a lógica de busca real)
  const product = {
    id,
    name: 'Maçãs Orgânicas',
    description: 'Maçãs frescas da fazenda local.',
    price: 3.99,
    stock: 10,
    imageUrl: '/images/products/apple.webp'
  }

  // Verifica se o produto está carregado
  if (!product) {
    return (
      <Layout>
        <Box>Loading...</Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container variant="main">
        <Box p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Detalhes do Produto
          </Heading>
          <Image src={product.imageUrl} alt={product.name} mb={4} />
          <Heading as="h3" size="lg" mb={2}>
            {product.name}
          </Heading>
          <Text color="gray.600">{product.description}</Text>
          <Text mt="2">
            ${product.price} | Estoque: {product.stock} unidades
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default ProductDetail
