function Container({ children }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed font-mono transition-all duration-150 dark:bg-neutral-400">
      {children}
    </div>
  );
}

export default Container;
