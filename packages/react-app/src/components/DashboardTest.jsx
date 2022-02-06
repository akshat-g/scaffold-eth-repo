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
import shrimp from "../assets/shrimp.png";
import crab from "../assets/crab.png";
import LendingBox from "./LendingBox";
import SwapBox from "./SwapBox";
import TokenBox from "./TokenBox";

import { profile } from "../result.json";

let COLORS = [
  "rgba(23, 63, 95, 0.3)",
  "rgba(32, 99, 155, 0.3)",
  "rgba(246, 213, 92, 0.3)",
  "rgba(237, 85, 59, 0.3)",
  "rgba(60, 174, 163, 0.3)",
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

COLORS = shuffle(COLORS);

function getColumnSpans(amountUSDs) {
  let highest = [1, 3];
  let second_highest = Math.log(amountUSDs[0] / amountUSDs[1]) > 1 ? [1, 3] : [2, 2];
  let third_highest = Math.log(amountUSDs[1] / amountUSDs[2]) > 1 ? [1, 2] : [1, 3];
  let fourth_highest = Math.log(amountUSDs[2] / amountUSDs[3]) > 1 ? [1, 2] : third_highest;
  return [highest, second_highest, third_highest, fourth_highest];
}

function DashboardTest({ address, chainId, logoutOfWeb3Modal }) {
  const { setLoading } = useLoadingContext();
  // setLoading(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  let colSpans = getColumnSpans([15000, 4000, 3000, 2300]);
  console.log("colSpans is", colSpans);
  const d = "crab";
  return (
    <div>
      <Box bg="#77787A" p="0.6em" m="0" h="auto">
        <Box bg="#F5F5F5" pb="5em" h="100%" rounded="10px">
          <NavbarTest address={address} chainId={chainId} logoutOfWeb3Modal={logoutOfWeb3Modal} />
          <Box mx="15vw" my="2em">
            <Flex justifyContent="space-around" mt="4em" mr="5em" alignItems="center"></Flex>
            <Grid
              autoFlow={true}
              mt="2em"
              templateRows="repeat(3, 1fr,0.5fr,0.5fr)"
              templateColumns="repeat(6, 1fr)"
              gap={6}
            >
              <GridItem
                rowSpan={colSpans[0][0]}
                colSpan={colSpans[0][1]}
                minW="100%"
                h="100%"
                bg={COLORS[0]}
                rounded="10px"
                py="1em"
                px="2em"
                align="center"
                className="blur"
              >
                <LendingBox> </LendingBox>
              </GridItem>
              <GridItem
                rowSpan={2}
                colSpan={3}
                minW="100%"
                h="100%"
                className="blur main-box"
                rounded="10px"
                py="1em"
                px="2em"
                align="center"
              >
                <Box align="center">
                  <Text fontFamily="Montserrat" align="left" color="blackAlpha.500">
                    <Tag>{address}</Tag>
                  </Text>
                  <Heading align="center" mt="1em" fontFamily="Raleway" fontWeight={700}>
                    Trading Crab
                  </Heading>
                  <Image boxSize="180px" src={crab} />

                  <Flex mt="10px" justifyContent="space-around">
                    <Flex justifyContent="space-between">
                      <Text fontWeight={500} fontSize="16px" mr="2em">
                        Total Traded:
                      </Text>
                      <Text fontSize="16px">$23k</Text>
                    </Flex>
                    <Flex pl="3em">
                      <Text fontWeight={500} fontSize="16px" mr="2em">
                        Total Volume:
                      </Text>
                      {/* <Text fontSize="16px">$12k</Text> */} $10k
                    </Flex>
                  </Flex>
                  <Flex mx="2.5em" mb="-1em" alignItems="center" justifyContent="center">
                    <Stack spacing={-4}>
                      <Text color="blackAlpha.500">Your Reputation Score:</Text>
                      <Heading fontFamily="Montserrat" fontWeight={700} color="green" fontSize="50px">
                        {/* {profile.reputation_score} */}
                        345
                      </Heading>
                    </Stack>

                    <Heading fontWeight={600} fontSize="1.4em" fontFamily="Raleway"></Heading>
                  </Flex>
                </Box>
              </GridItem>

              <GridItem
                rowSpan={colSpans[1][0]}
                colSpan={colSpans[1][1]}
                w="100%"
                bg={COLORS[2]}
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
                className="blur"
              >
                <TokenBox></TokenBox>
              </GridItem>

              <GridItem
                rowSpan={colSpans[2][0]}
                colSpan={colSpans[2][1]}
                w="100%"
                bg={COLORS[3]}
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
                h="min-content"
                className="blur"
              >
                <SwapBox name={"Uniswap"}></SwapBox>
              </GridItem>

              <GridItem
                rowSpan={colSpans[3][0]}
                colSpan={colSpans[3][1]}
                w="100%"
                bg={COLORS[4]}
                align="center"
                rounded="10px"
                py="1.5em"
                px="2em"
                h="min-content"
                className="blur"
              >
                <SwapBox name={"QuickSwap"}></SwapBox>
              </GridItem>

              <GridItem
                h="min-content"
                colSpan={6 - colSpans[3][1]}
                align="center"
                w="100%"
                bg="rgb(212,212,212)"
                rounded="10px"
                py="1.5em"
                px="2em"
                className="blur"
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
