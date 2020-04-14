import styled from 'styled-components'

export const MenuItemContainer = styled.div`
	// height: ${({ size }) => (size ? '380px' : '240px')};
  height: 240px;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		// & .content {
		// 	opacity: 0.9;
		// }
	}
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ContentContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
  justify-content: center;
  @media screen and (max-width: 767px) {
  }
`