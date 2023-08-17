import { Routes, Route } from "react-router-dom";
import { Home, Login, Registration, ForgotPassword, Page404 } from "./pages";
import { Box, Container, Flex } from "@chakra-ui/react";
// import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const isAuth = true;

  return (
    <>
      {/* <NavBar /> */}
      <Container
        maxWidth="1200px"
        m="0 auto"
        p="0px 20px"
        flexDirection="column"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
