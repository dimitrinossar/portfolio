import Wrapper from './Wrapper'

export default function NavBar() {
  return (
    <header className="bg-violet-600">
      <Wrapper className="flex justify-between">
        <h1>dimitrinossar</h1>
        <div className="flex justify-between gap-2">
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </Wrapper>
    </header>
  )
}
