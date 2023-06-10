import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userNameSchema } from "utils/validation/user-name.schema";
import { IUserName } from "types/intro.types";
import { useAppDispatch } from "redux/hooks";

import * as Styled from "./intro.styled";
import { setUserName } from "redux/reducers/user-name.reducer";

export const Intro = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IUserName>({
    resolver: yupResolver(userNameSchema),
  });

  const onSubmit = (data: IUserName) => dispatch(setUserName(data));

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Paragraph>Hello! Input your name, please.</Styled.Paragraph>
        <Styled.InputWrapper>
          <Styled.Input {...register("name")} />
          <Styled.ErrorBox>{errors.name?.message}</Styled.ErrorBox>
        </Styled.InputWrapper>
        <Styled.Button type="submit" aria-label="user name submit button">
          submit
        </Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
};
