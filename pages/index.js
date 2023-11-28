import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import ProductCard from "../components/ProductCard";

import { run } from "../app";

const Home = () => {
  run();
  // Conectar ao MongoDB ao inicializar a página

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
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </SimpleGrid>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from "../components/chakra";
