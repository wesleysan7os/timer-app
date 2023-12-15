import styled from 'styled-components'

export const AppContainer = styled.main`
  max-width: 70rem;
  margin: 5rem auto;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-800']};
`
