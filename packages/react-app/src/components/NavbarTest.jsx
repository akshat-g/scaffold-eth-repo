import React from "react";
import { Box, Flex, Heading, Text, Image, Input, Button, Link } from "@chakra-ui/react";
import { BiWalletAlt } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import { useHistory } from "react-router-dom";

function NavbarTest({ address, chainId, logoutOfWeb3Modal }) {
  const history = useHistory();
  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between" px="1em">
        <Heading py="0.5em" px="0.5em" align="left" fontFamily="Philosopher">
          MagicPolly
        </Heading>

        <Flex px="1em">
          <Box bg="rgb(213, 204, 201)" rounded="10px" p="0.7rem">
            <Flex alignItems="center" lineHeight="1.25rem" fontWeight="500">
              <BiWalletAlt />
              <Text mb="0" alignItems="center" ml="10px" fontFamily="Montserrat" fontSize=".875rem">
                {address}
              </Text>
            </Flex>
          </Box>
          <Box ml="20px" bg="rgb(213, 204, 201)" rounded="10px" p="0.7rem">
            <Flex alignItems="center" lineHeight="1.25rem" fontWeight="500">
              <GiElectric />
              <Text mb="0" ml="10px" fontFamily="Montserrat" fontSize=".875rem">
                {/* {chainId} */}Mumbai
              </Text>
            </Flex>
          </Box>

          <Button
            px="2.5rem"
            fontFamily="Montserrat"
            py="0.5rem"
            color="white"
            className="btn"
            ml="20px"
            onClick={() => {
              logoutOfWeb3Modal();
              history.push("/");
            }}
          >
            Log Out
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default NavbarTest;
