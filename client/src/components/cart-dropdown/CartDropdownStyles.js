import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border: 1px solid black;
  background-color: white;
  color: black;
  top: 50px;
  right: 40px;
  z-index: 5;
`
export const CartItemsContainer = styled.div`
  height: 300px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
