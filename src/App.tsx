import { Routes, Route } from "react-router-dom";
import { Home, Login, Registration, ForgotPassword } from "./pages";
import { Container, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Container maxWidth="1200px" m="0 auto" p="0px 20px">
      <Flex gap="60px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </Flex>
    </Container>
  );
}

export default App;
