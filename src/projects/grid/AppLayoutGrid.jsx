import Container from "./components/Container";

function AppLayoutGrid() {
  return (
    <div className="font-roboto bg-neutral-900">
      <Container>
        <div className="grid w-full divide-x divide-y divide-gray-400 sm:grid-cols-2">
          <Card />
          <Card />
          <Card className="col-span-2" />
        </div>
      </Container>
    </div>
  );
}

const Card = ({ className }) => {
  return (
    <div className={`bg-white p-4 sm:${className} `}>
      <h2 className="text-xl font-semibold">Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        id alias sed harum doloremque ducimus iste quasi unde perferendis nisi.
      </p>
      <div className="mt-4 flex h-40 w-full items-center justify-center rounded border border-none bg-[radial-gradient(black_1px,transparent_1px)] mask-radial-from-10% bg-size-[10px_10px]">
        <img src="As7PeMT.gif" alt="meme" />
      </div>
    </div>
  );
};

export default AppLayoutGrid;
