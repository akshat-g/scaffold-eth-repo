
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
  return (<div>
            <Heading fontFamily="Raleway" fontSize="1.8em" fontWeight={400}>
                  Uniswap Lender
            </Heading>

            <Stack mt="30px" px={0} spacing={-2}>
                <Flex justifyContent="space-between">
                {" "}
                <Text fontSize="16px">Total LP:</Text>
                <Text>$ 33</Text>
                </Flex>
                <Flex justifyContent="space-between">
                {" "}
                <Text fontSize="16px">Total Trade:</Text>
                <Text> 3</Text>
                </Flex>
            </Stack>
  </div>);
}
