import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Services/userService";
import Background from "../../Background";
import sprintgo from "../../../Images/3.svg"

import {
  BgContainer,
  Container,
  SprintgoIconContainer,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Icon,
  Hr,
  Link,
} from "./Styled";

const Login = ({setConnected}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInformations, setUserInformations] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Log in to SprintGo"
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInformations, dispatch)
   
  };
  return (
    <>
    
      <Container>
        
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Log in to SprintGo</Title>
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={userInformations.email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    password: e.target.value,
                  })
                }
              />
              <Button>Log in</Button>
              <Hr />
              <Link
                fontSize="0.85rem"
                onClick={() => navigate("/register")}
              >
                Sign up for an account
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Login;
