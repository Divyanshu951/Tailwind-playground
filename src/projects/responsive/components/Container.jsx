function Container({ children }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl md:px-2">
      {children}
    </div>
  );
}

export default Container;
