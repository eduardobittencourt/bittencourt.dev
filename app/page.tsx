export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 dark:bg-black dark:text-slate-50">
      <main>
        <h1 className="text-center text-4xl">Eduardo Bittencourt</h1>
        <a
          className="block text-center font-sans"
          href="mailto:eduardo@bittencourt.dev"
        >
          eduardo@bittencourt.dev
        </a>
      </main>

      <footer className="flex gap-2">
        <a
          className="text-center font-sans"
          href="https://www.linkedin.com/in/eduardobittencourt08/"
        >
          LinkedIn
        </a>
        <a
          className="text-center font-sans"
          href="https://github.com/eduardobittencourt"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
