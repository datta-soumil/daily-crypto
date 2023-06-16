import { Box, Stack, VStack, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import img2 from "../assets/myPic.jpeg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontFamily={'Bebas Neue'} fontSize={'xl'}>About Us </Text>
          <Text fontWeight={"bold"} fontSize={'small'} letterSpacing={'widest'} textAlign={['center','left']}>
            Your one-stop destination for all things related to cryptocurrencies
            and crypto trading.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"20"} mt={["4", "0"]} src={img2}/>
        </VStack>
        

      </Stack>
      <Text textAlign={'center'} fontSize={'12px'} fontWeight={'bold'} mt={'20px'}>Made with love by Soumil ❤️ </Text>
    </Box>
  );
};

export default Footer;
