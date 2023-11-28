import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react';

const AccordionComponent = ({ items, textAlign }) => {
  return (
    <Accordion allowToggle>
      {items.map((item, index) => (
        <AccordionItem key={index} border={0} rounded={0}>
          <h2>
            <AccordionButton px={0}>
              <Box as="span"  fontSize={{ base: '2xl', md: '3xl', xl: '3xl' }} fontWeight={600}  textAlign={textAlign}>
                {item.title}
              </Box>
              <AccordionIcon ml={8} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={textAlign}>{item.description}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
