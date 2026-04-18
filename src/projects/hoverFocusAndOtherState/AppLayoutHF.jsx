import Container from "./components/Container";

function AppLayoutHF() {
  return (
    <Container>
      <h1 className="text-6xl font-semibold">Hover, Focus & Other state</h1>

      <form className="mt-8 rounded-xl border border-neutral-400 p-7">
        <h2 className="text-4xl">
          This is a{" "}
          <span className="relative z-10 inline-block px-1 text-neutral-800 before:absolute before:inset-0 before:-z-10 before:-skew-2 before:bg-red-400 before:content-['']">
            crazy
          </span>{" "}
          Good Form
        </h2>

        <Group className="my-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="First Name">First Name</Label>
            <Input
              name="First Name"
              type="text"
              placeholder="Enter your First Name"
            ></Input>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
            ></Input>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="Company">Company</Label>
            <Input
              name="Company"
              type="text"
              placeholder="Enter your Company name"
            ></Input>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Input
              name="message"
              type="text"
              placeholder="Enter your message"
            ></Input>
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            className="relative mt-3 cursor-pointer overflow-hidden rounded-lg bg-zinc-800 py-2 font-semibold text-white transition-all duration-300 after:absolute after:-top-20 after:-left-42 after:h-100 after:w-1/2 after:rotate-10 after:bg-white/10 after:backdrop-blur-[0.5px] after:transition-all after:duration-250 after:content-[''] hover:after:translate-x-[220%] active:scale-95"
          >
            Send that text now
          </button>

          <hr />

          <button
            onClick={(e) => e.preventDefault()}
            className="relative mt-3 cursor-pointer overflow-hidden rounded-lg bg-cyan-400 py-2 font-semibold text-black shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 after:absolute after:-top-20 after:-left-22 after:h-100 after:w-1/2 after:rotate-10 after:bg-white/40 after:backdrop-blur-[0.5px] after:transition-all after:duration-250 after:content-[''] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:after:translate-x-[170%] active:scale-95"
          >
            Send that text now
          </button>
        </Group>
      </form>
    </Container>
  );
}

function Group({ children, className }) {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
}

function Label({ htmlFor, children, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`after:ml-0.5 after:text-red-400 after:content-['*'] ${className}`}
    >
      {children}
    </label>
  );
}

function Input({ name, type, placeholder, className }) {
  return (
    <input
      className={`focus: focus: focus: focus:bg-neutral-150 focus: Ibg-white shadow-input rounded-lg border-neutral-300 px-4 py-2 ring ring-neutral-300 transition-all duration-200 outline-none focus:ring-offset-1 ${className} invalid:border invalid:border-red-300 invalid:outline-0`}
      name={name}
      type={type}
      placeholder={placeholder}
    ></input>
  );
}

export default AppLayoutHF;
