import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../Background";
import { register } from "../../../Services/userService";
import { useDispatch, useSelector } from "react-redux";
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
  Text,
  Icon,
  Hr,
  Link,
} from "./Styled";
import { useEffect } from "react";

const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.user);
  const [userInformations, setUserInformations] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repassword: "",
  });

  useEffect(() => {
    document.title = "Create a SprintGo"
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userInformations, dispatch);
  };

  return (
    <>
      
      <Container>

        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Sign up for your account</Title>
              <Input
                type="text"
                placeholder="Enter name"
                required
                value={userInformations.name}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    name: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Enter surname"
                required
                value={userInformations.surname}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    surname: e.target.value,
                  })
                }
              />
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
              <Input
                type="password"
                placeholder="Confirm password"
                required
                value={userInformations.repassword}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    repassword: e.target.value,
                  })
                }
              />
              <Text>
                By signing up, you confirm that you've read and accepted our{" "}
                <Link fontSize="0.75rem">Terms of Service</Link> and{" "}
                <Link fontSize="0.75rem">Privacy Policy</Link>.
              </Text>
              <Button type="submit" disabled={pending}>
                Complete
              </Button>
              <Hr />
              <Link fontSize="0.85rem" onClick={() => navigate("/login")}>
                Already have an account? Log In
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Register;
