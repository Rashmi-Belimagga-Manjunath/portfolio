export default function Footer() {
  return (
    <footer className="py-8 px-6 max-w-[1200px] mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-light">
          &copy; {new Date().getFullYear()} Rashmi Manjunath
        </p>
        <p className="text-xs text-muted-light">
          Product Manager · AI Product Builder · Researcher
        </p>
      </div>
    </footer>
  );
}
