import styled from 'styled-components'

export const HomepageContainer = styled.div`
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    overflow: hidden;
  }
`
