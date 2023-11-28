import { Container, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ProductCard from '../components/ProductCard'
import { connectToMongoDB, client } from './api/mongo' // Substitua pelo caminho real
import { Product } from './api/models'; // Substitua pelo caminho real

const Home = () => {
  // Conectar ao MongoDB ao inicializar a página
  connectToMongoDB()

  // Exemplo de utilização do modelo Product
  Product.find({})
    .then(products => {
      console.log('Produtos encontrados:', products)
    })
    .catch(error => {
      console.error('Erro ao consultar produtos no MongoDB', error)
    })

  const products = [
    // Exemplo de dados do produto (substitua com seus próprios dados)
    {
      id: 1,
      name: 'Maçãs Orgânicas',
      description: 'Maçãs frescas da fazenda local.',
      price: 3.99,
      imageUrl: 'images/products/apple.webp'
    },
    {
      id: 2,
      name: 'Cenouras Orgânicas',
      description: 'Cenouras cultivadas sem pesticidas.',
      price: 2.49,
      imageUrl: 'images/products/cenoura.webp'
    },
    {
      id: 3,
      name: 'Limão Tahiti',
      description: 'Maçãs frescas da fazenda local.',
      price: 5.99,
      imageUrl: 'images/products/limaotahiti.webp'
    },
    {
      id: 4,
      name: 'Batata Unidade 600g',
      description: 'Maçãs frescas da fazenda local.',
      price: 5.99,
      imageUrl: 'images/products/batata.webp'
    }
    // Adicione mais produtos conforme necessário
  ]

  return (
    <Layout>
      <Container variant="main">
        <Section>
          <Box>
            <Heading as="h2" size="xl" mb={16}>
              Produtos Orgânicos
            </Heading>
            <SimpleGrid
              columns={{ base: 2, md: 2, lg: 4 }}
              spacing={{ base: 2, md: 8, lg: 8 }}
            >
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </SimpleGrid>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
