export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted/40">
          &copy; {new Date().getFullYear()} Rashmi Manjunath
        </p>
        <p className="text-xs text-muted/30">
          Product Manager &middot; AI Product Builder &middot; Researcher
        </p>
      </div>
    </footer>
  );
}
