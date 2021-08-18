import styled from 'styled-components';

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #ffffff;
    border-left: 5px solid transparent;
    :hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 24px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const Adress = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    line-height: 19px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const PhotoRes = styled.img`
    display: ${(props) => (props.imageLoaded ? "block" : "none")};
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
`;
