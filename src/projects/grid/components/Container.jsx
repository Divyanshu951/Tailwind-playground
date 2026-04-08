function Container({ children }) {
  return (
    <div className="border- mx-auto flex min-h-screen max-w-4xl flex-col items-center border-x border-gray-500 py-20">
      {children}
    </div>
  );
}

export default Container;
