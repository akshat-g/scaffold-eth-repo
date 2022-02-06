// provides a blockie image for the address using "react-blockies" library
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  GridItem,
  Input,
  Progress,
  Stack,
  Button,
  Link,
  Tag,
  Grid,
  Divider,
} from "@chakra-ui/react";

export default function SwapBox({ name }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div>
      <Heading fontFamily="Raleway" fontSize="1.8em" fontWeight={400}>
        {name} Lender
      </Heading>

      <Stack mt="30px" px={0} spacing={-2}>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            Total LP:
          </Text>
          <Text fontSize="16px">$4000</Text>
        </Flex>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            Total Trade:
          </Text>
          <Text fontSize="16px">$2000</Text>
        </Flex>
      </Stack>
    </div>
  );
}
