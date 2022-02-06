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

export default function LendingBox(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div>
      <Heading fontFamily="Raleway" fontSize="2em" fontWeight={400}>
        Aave Lender
      </Heading>

      <Stack mt="30px" px={0} spacing={-2}>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            Total Amount:
          </Text>
          <Text fontSize="16px">$5280</Text>
        </Flex>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            Health Factor:
          </Text>
          <Text fontSize="16px">1.872</Text>
        </Flex>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            Total Deposit:
          </Text>
          <Text fontSize="16px">$3120</Text>
        </Flex>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            Total Borrow:
          </Text>
          <Text fontSize="16px">$1299</Text>
        </Flex>
      </Stack>
    </div>
  );
}
