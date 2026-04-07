import Container from "./components/Container";
import NavBar from "./components/NavBar";

function AppLayoutResponsive() {
  return (
    // [background:radial-gradient(125%_100%_at_50%_0%,#1E293B_0%,#020617_60%)_#020617]
    <div>
      <div className="min-h-screen">
        <Container>
          <NavBar />
        </Container>
      </div>
    </div>
  );
}

export default AppLayoutResponsive;
