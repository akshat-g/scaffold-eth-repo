import React, { useEffect } from "react";
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
import NavbarTest from "./NavbarTest";
import { useLoadingContext } from "../context/loading";
import whale from "../assets/whale.png";

function DashboardTest({ address, chainId, logoutOfWeb3Modal }) {
  const { setLoading } = useLoadingContext();
  // setLoading(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div>
      <Box bg="#77787A" p="0.6em" m="0" h="auto">
        <Box bg="#F5F5F5" pb="5em" h="100%" rounded="10px">
          <NavbarTest address={address} chainId={chainId} logoutOfWeb3Modal={logoutOfWeb3Modal} />

          <Box mx="10vw" my="2em">
            <Flex justifyContent="space-around" mt="4em" mr="5em" alignItems="center">
              <Box w="400px" align="left" bg="rgb(212,212,212)" rounded="10px" py="1.5em" px="2em">
                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <Text fontFamily="Montserrat" align="left" color="blackAlpha.500">
                      <Tag>Lakshay.ETH</Tag>
                    </Text>
                    <Heading fontFamily="Montserrat" fontWeight={700} color="green" fontSize="50px">
                      348
                    </Heading>
                  </Box>
                  <Box align="center">
                    <Heading fontSize="1.4em" fontFamily="Raleway" fontWeight={500}>
                      10k on <br /> Mumbai Network
                    </Heading>
                  </Box>
                </Flex>
              </Box>

              <Box align="center">
                <Heading fontFamily="Raleway" fontWeight={500}>
                  Trading Whale
                </Heading>
                <Image boxSize="100px" src={whale} />

                <Flex mt="10px" justifyContent="space-around">
                  <Flex justifyContent="space-between">
                    <Text fontSize="16px" mr="2em">
                      Total Traded:
                    </Text>
                    <Text fontSize="16px">$23k</Text>
                  </Flex>
                  <Flex pl="3em">
                    <Text fontSize="16px" mr="2em">
                      Total Volume:
                    </Text>
                    <Text fontSize="16px">$12k</Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>

            <Grid
              autoFlow={true}
              mt="2em"
              templateRows="repeat(3, 1fr,0.5fr,0.5fr)"
              templateColumns="repeat(6, 1fr)"
              gap={6}
            >
              <GridItem
                rowSpan={1}
                colSpan={3}
                minW="100%"
                h="100%"
                bg="rgb(212,212,212)"
                rounded="10px"
                py="1em"
                px="2em"
                align="center"
              >
                <Heading fontFamily="Raleway" fontSize="2em" fontWeight={400}>
                  Aave Lender
                </Heading>

                <Stack mt="30px" px={0} spacing={-2}>
                  <Flex justifyContent="space-between">
                    {" "}
                    <Text fontSize="16px">Total Amount:</Text>
                    <Text>$ 33</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    {" "}
                    <Text fontSize="16px">Health Factor:</Text>
                    <Text fontSize="16px"> 3</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    {" "}
                    <Text fontSize="16px">Total Deposit:</Text>
                    <Text> 3</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    {" "}
                    <Text fontSize="16px">Total Borrow:</Text>
                    <Text>33</Text>
                  </Flex>
                </Stack>
              </GridItem>

              <GridItem
                colSpan={3}
                rowSpan={1}
                w="100%"
                bg="rgb(212,212,212)"
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
              >
                <Stack spx={0} spacing={0} px="20%">
                  <Heading fontFamily="Raleway" fontSize="1.7em" fontWeight={400}>
                    Circle USDC
                  </Heading>
                  <Flex justifyContent="space-between">
                    {" "}
                    <Text fontSize="16px">20k USDC:</Text>
                    <Text>$20k</Text>
                  </Flex>
                </Stack>
                <Divider borderColor="blackAlpha.500" />
                <Stack spacing={0} mt="30px" px="20%">
                  <Heading fontFamily="Raleway" fontSize="1.7em" fontWeight={400}>
                    Wrapped Matic
                  </Heading>
                  <Flex justifyContent="space-between">
                    {" "}
                    <Text fontSize="16px">20k WMATIC:</Text>
                    <Text> $36k</Text>
                  </Flex>
                </Stack>
              </GridItem>

              <GridItem
                colSpan={2}
                // rowSpan={1}
                w="100%"
                bg="rgb(212,212,212)"
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
                h="min-content"
              >
                <Heading fontFamily="Raleway" fontSize="1.8em" fontWeight={400}>
                  Sushiswap Lender
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
              </GridItem>

              <GridItem
                colSpan={2}
                // rowSpan={1}
                w="100%"
                bg="rgb(212,212,212)"
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
                h="min-content"
              >
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
              </GridItem>

              <GridItem
                colSpan={2}
                // rowSpan={1}
                w="100%"
                bg="rgb(212,212,212)"
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
                h="min-content"
              >
                <Heading fontFamily="Raleway" fontSize="1.8em" fontWeight={400}>
                  Quickswap Lender
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
              </GridItem>

              <GridItem
                h="min-content"
                colSpan={2}
                align="center"
                w="100%"
                bg="rgb(212,212,212)"
                rounded="10px"
                py="1.5em"
                px="2em"
              >
                <Heading mb="0" fontFamily="Raleway" fontSize="1.8em" fontWeight={400}>
                  Others
                </Heading>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default DashboardTest;
