function Container({ children }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center border-x border-gray-100">
      {children}
    </div>
  );
}

export default Container;
