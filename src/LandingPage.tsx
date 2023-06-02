import Header from "./components/Header";

export default function LandingPage() {
  return (
    <>
      <Header />
      <ul className="landing-routes">
        <li>
          <a href={'/todo'}>Todo</a>
        </li>
        <li>
          <a href={'/geyser'}>Geyser</a>
        </li>
      </ul>
    </>
  )
}
