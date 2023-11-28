import {
  Container,
  Badge,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title} from '../../components/work'

const Work = () => (
  <Layout title="Centro Fiscal">
    <Container  variant="principal">
      <Title>
        Centro Fiscal <Badge>2021-2022</Badge>
      </Title>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
