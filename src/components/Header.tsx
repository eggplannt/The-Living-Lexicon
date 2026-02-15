export default function Header() {
  const navItems = ["Trends", "About Us"];

  return (
    <header className="w-full bg-background">
      <div className="px-20 flex w-full flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-8 sm:gap-12">
          <a
            href="/"
            className="text-5xl font-black tracking-tight text-onbackground"
          >
            TLL
          </a>
          <div className="w-10" />
          <nav
            aria-label="Primary"
            className="flex items-center gap-8 sm:gap-12"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-bold text-onbackground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="self-start rounded-md bg-transparent px-6 py-3 text-2xl font-bold text-onbackground transition-colors hover:text-primary sm:self-auto border-onbackground border-2"
        >
          Log In
        </button>
      </div>
    </header>
  );
}
