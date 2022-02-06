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

export default function SwapBox(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div>
      <Stack spx={0} spacing={0} px="20%">
        <Heading fontFamily="Raleway" fontSize="1.7em" fontWeight={400}>
          Circle USDC
        </Heading>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            20k USDC:
          </Text>
          <Text fontSize="16px">$20k</Text>
        </Flex>
      </Stack>
      <Divider borderColor="blackAlpha.500" />
      <Stack spacing={0} mt="30px" px="20%">
        <Heading fontFamily="Raleway" fontSize="1.7em" fontWeight={400}>
          Wrapped Matic
        </Heading>
        <Flex justifyContent="space-between">
          {" "}
          <Text fontWeight={500} fontSize="16px">
            20k WMATIC:
          </Text>
          <Text fontSize="16px"> $36k</Text>
        </Flex>
      </Stack>
    </div>
  );
}
