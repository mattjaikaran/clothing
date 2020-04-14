import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'

export const LogoContainer = styled(Link)`
  height: auto;
  max-width: 70px;
  width: 35px;
  margin-top: 1%;
  margin-left: 2%;

  @media screen and (max-width: 767px) {
    max-width: 50px;
    margin-top: 2%;
    margin-left: 3%;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 97%;
  position: absolute;
  margin-top: 1%;

  @media screen and (max-width: 767px) {
    margin-top: 2%;
  }
`

export const OptionLink = styled(Link)`
  padding: 5px;
  cursor: pointer;
`
