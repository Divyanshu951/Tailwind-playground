import Container from "./components/Container";
import Sliding from "./components/Sliding";
import SlidingGem from "./components/SlidingGem";
import Transform3D from "./components/Transform3D";

function AppLayoutMasking() {
  return (
    <Container>
      <Transform3D />
      <div className="m-4"></div>
      <Sliding />
      <div className="m-4"></div>
      <SlidingGem />
    </Container>
  );
}

export default AppLayoutMasking;
