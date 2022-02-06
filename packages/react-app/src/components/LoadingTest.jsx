import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useLoadingContext } from "../context/loading";

function LoadingTest() {
  const { loading } = useLoadingContext();
  console.log(loading, "dcvvvcdvvvv");
  return (
    <>
      {loading && (
        <Box position="fixed" w="100%" h="100%" className="blur-box" zIndex="999">
          <Box top="40%" position="absolute" w="100%" zIndex="999" my="auto">
            <Box top="50%">
              <Stack spacing="1em" alignItems="center">
                <Box align="center">
                  <Text fontSize="2em" lineHeight="1.2em" fontFamily="Philosopher">
                    Wait a second
                    <br />
                    we are fetching your data
                  </Text>
                </Box>
                <Box className="loading-bar"></Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default LoadingTest;
