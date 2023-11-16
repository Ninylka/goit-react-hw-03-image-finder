import { ButtonLoadStyled } from "./Button.styled";

export const ButtonLoad  = ({onClick}) => {
    return (
        <ButtonLoadStyled type="button" onClick={onClick}>
            Load more
        </ButtonLoadStyled>
    )
};

