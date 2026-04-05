import Container from "./components/Container";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function AppLayout() {
  return (
    <div className="text-amber-50 [background:radial-gradient(125%_100%_at_50%_0%,#1E293B_0%,#020617_60%)_#020617]">
      <Container>
        <NavBar />
        <Hero />
      </Container>
    </div>
  );
}

export default AppLayout;
