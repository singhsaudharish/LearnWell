import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Menu, X, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/topics/codingqa", label: "Coding Q&A" },
  ];

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const handleProfile = () => {
    setMobileOpen(false);
    navigate("/profile");
  };

  const handleSignOut = async () => {
    await signOut();
    setMobileOpen(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>

          <span className="text-xl font-bold text-foreground">
            LearnWell
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">

          {/* Main Links */}
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* User / Login */}
          {user ? (
            <div className="flex items-center gap-3">

              {/* Profile */}
              <button
                type="button"
                onClick={handleProfile}
                className="flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-muted"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={user.avatar || undefined}
                    alt={user.name}
                  />

                  <AvatarFallback className="bg-primary/10 font-bold text-primary">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <span className="max-w-[120px] truncate font-semibold text-foreground">
                  {user.name}
                </span>
              </button>

              {/* Sign Out */}
              <button
                type="button"
                onClick={handleSignOut}
                title="Sign Out"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === "/auth"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Login/Register
            </Link>
          )}

          {/* Theme */}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">

          {/* Mobile Navigation Links */}
          <div className="flex flex-col">

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`border-b py-3 font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile User */}
            {user ? (
              <div className="border-b py-3">

                <button
                  type="button"
                  onClick={handleProfile}
                  className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-muted"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={user.avatar || undefined}
                      alt={user.name}
                    />

                    <AvatarFallback className="bg-primary/10 font-bold text-primary">
                      {initials}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-foreground">
                      {user.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      View Profile
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="mt-2 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMobileOpen(false)}
                className={`border-b py-3 font-medium transition-colors hover:text-primary ${
                  location.pathname === "/auth"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Login/Register
              </Link>
            )}

            {/* Theme */}
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">
                Theme
              </span>

              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;