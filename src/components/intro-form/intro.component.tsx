import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userNameSchema } from "utils/validation/user-name.schema";
import { IUserName } from "types/intro.types";
import { useAppDispatch } from "redux/hooks";
import { setUserName } from "redux/reducers/user-name.reducer";

import * as Styled from "./intro.styled";
import * as Ui from "styles/ui";
import { FONT } from "styles";

export const IntroForm = () => {
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
    <Ui.Container.Main>
      <Ui.Container.Absolute center>
        <Ui.Container.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Ui.Container.Wrapper mb="1rem">
              <Ui.Paragraph
                ta={FONT.TEXT_ALIGN.CENTER}
                fw={FONT.FONT_WEIGHT.BOLD}
                fz={FONT.SIZE.LARGE}
              >
                Hello! Input your name, please.
              </Ui.Paragraph>
            </Ui.Container.Wrapper>
            <Styled.InputWrapper>
              <Ui.Input {...register("name")} />
              <Styled.ErrorBox>{errors.name?.message}</Styled.ErrorBox>
            </Styled.InputWrapper>
            <Ui.Button type="submit" aria-label="user name submit button">
              submit
            </Ui.Button>
          </form>
        </Ui.Container.Content>
      </Ui.Container.Absolute>
    </Ui.Container.Main>
  );
};
