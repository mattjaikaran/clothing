import styled from 'styled-components'
import CustomButton from '../custom-button/CustomButton'

export const CollectionItemContainer = styled.div`
  display: flex;
  // margin: 50px 0;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 767px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
    }
  }
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 235px;
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`

export const BackgroundImage = styled.div`
  width: 300px;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`

export const NameContainer = styled.span`
  width: 75%;
  margin-bottom: 15px;
`

export const PriceContainer = styled.span`
  width: 25%;
  font-size: 20px;
  text-align: center;
`
