import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-bone">
      <div className="container max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-ash">
          <span className="mr-3 inline-block h-px w-6 align-middle bg-rust" />
          Error · 404
        </div>
        <h1 className="mt-6 font-display text-6xl tracking-tight md:text-8xl" style={{ fontWeight: 500 }}>
          Page not found<span className="text-rust">.</span>
        </h1>
        <p className="mt-6 max-w-md text-bone/70">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-3 border border-bone/20 px-6 py-3 text-sm uppercase tracking-[0.2em] transition-colors hover:border-rust hover:text-rust"
        >
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
