import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

import MyAxiosinstance from "../../axios";
import { useForm } from "react-hook-form";
import { RegistrationForm } from "../../types";

export function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const registerNewUser = async (requestValues: RegistrationForm) => {
    const data = await MyAxiosinstance.post("/reqister", requestValues);

    // if (!data.payload) {
    //   return alert("Не удалось зарегистрироваться");
    // }

    // if ("token" in data.payload) {
    //   window.localStorage.setItem("token", data.payload.token);
    // }
  };

  // if (isAuth) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Flex
      minH={"100vh"}
      w="100%"
      align="center"
      justify="center"
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Зарегистрироваться
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
            чтобы насладиться всеми нашими интересными
            <Link to="/" style={{ color: "#4299E1" }}>
              функциями
            </Link>{" "}
            ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit(registerNewUser)}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Имя</FormLabel>
                    <Input
                      type="text"
                      {...register("firstName", {
                        required: "Укажите свое имя",
                      })}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Фамилия</FormLabel>
                    <Input type="text" {...register("lastName")} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Почта</FormLabel>
                <Input
                  type="email"
                  {...register("email", {
                    required: "Укажите почту",
                  })}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Пароль</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    pr="55px"
                    {...register("password", {
                      required: "Укажите пароль",
                    })}
                  />
                  <InputRightElement w="40px" h="100%">
                    <Button
                      w="40px"
                      h="100%"
                      p="0"
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? (
                        <BiShow size="18px" />
                      ) : (
                        <BiHide size="18px" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Зарегистироваться
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Есть аккаунт?{" "}
                  <Link to="/login" style={{ color: "#4299E1" }}>
                    Войти
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
