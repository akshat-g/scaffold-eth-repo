import React, { useState } from "react";
import { Box, Flex, Heading, Text, Image, Input, Button, Link } from "@chakra-ui/react";
import homebg from "../assets/home-bg.png";
import { useHistory } from "react-router-dom";
import { useLoadingContext } from "../context/loading";

function HeroTest({ web3Modal, loadWeb3Modal, logoutOfWeb3Modal }) {
  const history = useHistory();
  const { setLoading, loading } = useLoadingContext();
  console.log(loading);
  return (
    <>
      {/* <LoadingTest /> */}
      <Box bg="#77787A" p="0.6em" m="0" h="100vh" overflow="hidden">
        <Box bg="#F5F5F5" h="100%" rounded="10px">
          <Heading p="1em" align="left" fontFamily="Philosopher">
            MagicPolly
          </Heading>

          <Flex h="70%" alignItems="center" justifyContent="space-between">
            <Box ml="5em" mr="10em">
              <Heading fontSize="4vw" fontFamily="Montserrat" fontWeight="500" textTransform="uppercase">
                Your pluggable
                <br />
                web3 credit score
                <br />
                generator
              </Heading>
              <Text fontSize="1.2vw" fontFamily="Montserrat">
                Generate your wallet's score based on
                <br />
                your past activites, and access
                <br />
                advantages and bonuses in
                <br />
                decentralized protocols
              </Text>

              <Box>
                {web3Modal.cachedProvider ? (
                  <Flex>
                    {/* <Link href="/dashboard/user"> */}
                    <Button
                      px="2.5rem"
                      fontFamily="Montserrat"
                      py="0.5rem"
                      color="white"
                      onClick={() => {
                        setLoading(true);
                        history.push("/dashboard");
                      }}
                      className="btn"
                    >
                      Dashboard
                    </Button>
                    {/* </Link> */}
                    <Button
                      px="2.5rem"
                      fontFamily="Montserrat"
                      py="0.5rem"
                      color="white"
                      className="btn"
                      ml="20px"
                      onClick={logoutOfWeb3Modal}
                    >
                      Log Out
                    </Button>
                  </Flex>
                ) : (
                  <Flex w="60%" bg="rgb(225,225,225)" p="1em" rounded="10px">
                    <Input
                      fontFamily="Montserrat"
                      placeholder="Enter Your Address or"
                      border="none"
                      _focus={{ border: "none" }}
                    />
                    <Button
                      px="2.5rem"
                      fontFamily="Montserrat"
                      py="0.5rem"
                      color="white"
                      className="btn"
                      onClick={loadWeb3Modal}
                    >
                      Conect Wallet
                    </Button>
                  </Flex>
                )}
              </Box>
            </Box>
            <Box flex="1">
              <Image h="80%" w="80%" src={homebg} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default HeroTest;
