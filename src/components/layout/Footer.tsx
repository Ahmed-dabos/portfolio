export function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Ahmed Ghazy. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0 italic">
          Built with curiosity and too many tabs.
        </p>
      </div>
    </footer>
  );
}
