import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

export function Login() {
  return (
    <Flex
      minH={"100vh"}
      w="100%"
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Войдите в свой аккаунт</Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
            чтобы насладиться всеми нашими интересными
            <Link to="/" style={{ color: "#4299E1" }}> функциями</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Почта</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Пароль</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"flex-end"}
              >
                <Link to="/" style={{ color: "#4299E1" }}>Забыли пароль?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Войти
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
