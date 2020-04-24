import styled from 'styled-components'

export const HomepageContainer = styled.div`
  align-items: center;
  margin: 10px auto 0;
  @media screen and (min-width: 768px) and (max-width: 959px) {
    padding: 0 15px;
    overflow: hidden;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    overflow: hidden;
  }
`
