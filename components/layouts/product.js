// components/Layout.js
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box maxW="800px" m="auto" pt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
