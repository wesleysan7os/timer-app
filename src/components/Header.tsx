import { StyledHeader } from './Header.styles'
import { Logo } from './Logo'

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <div>
        <img src="./src/assets/images/clock.png" alt="" />
        <img src="./src/assets/images/parchment.png" alt="" />
      </div>
    </StyledHeader>
  )
}
