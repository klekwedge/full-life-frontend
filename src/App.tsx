import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import  Registration  from "./pages/Registration/Registration";
import { Container, Flex } from "@chakra-ui/react";

function App() {


  return (
    <Container maxWidth="1200px" m="0 auto" p="0px 20px">
      <Flex gap="60px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />

        </Routes>
      </Flex>
    </Container>
  );
}

export default App;
