export default function Page({ className, children }) {
  return (
    <section
      className={`w-screen min-h-screen px-4 md:px-32 lg:px-48 ${className}`}
    >
      <div>{children}</div>
    </section>
  );
}
