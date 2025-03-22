export function Footer() {
    return (
      <footer className="bg-fuchsia-100 dark:bg-fuchsia-950 py-6 px-4 mt-12">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-center gap-2">
          <p className="text-stone-700 dark:text-stone-200 text-sm">
            Feito com muito amor por <span className="text-fuchsia-600 font-semibold">Carlos seu amorzinho</span> 💑
          </p>
          <p className="text-stone-500 dark:text-stone-400 text-xs">
            Cada segundo ao seu lado é o melhor presente que a vida me deu. 💖
          </p>
          <span className="text-xs text-stone-400 mt-2">© {new Date().getFullYear()} Só nós dois</span>
        </div>
      </footer>
    )
  }
  