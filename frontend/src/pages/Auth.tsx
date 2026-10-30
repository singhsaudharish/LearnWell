import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [showOTP, setShowOTP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [otp, setOtp] = useState("");
  const OTP_EXPIRY_SECONDS = 2 * 60; 
  const [otpTimeLeft, setOtpTimeLeft] = useState(0);
   
  useEffect(() => {
  if (otpTimeLeft <= 0) return;

  const timer = setInterval(() => {
    setOtpTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [otpTimeLeft]);

const otpMinutes = Math.floor(otpTimeLeft / 60);
const otpSeconds = otpTimeLeft % 60;

const formattedOTPTime = `${String(otpMinutes).padStart(2, "0")}:${String(
  otpSeconds
).padStart(2, "0")}`;
  // ---------------- LOGIN ----------------

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please enter your email and password.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      const { token, user } = res.data;

      if (!token || !user) {
        throw new Error("Invalid login response");
      }

      login(token, {
        _id: user._id || user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || "",
        bio: user.bio || "",
      });

      toast({
        title: "Login successful!",
        description: `Welcome back, ${user.name}.`,
      });

      navigate("/profile");
    } catch (error: any) {
      console.error("Authentication Error:", error);

      toast({
        title: "Login failed",
        description:
          error.response?.data?.message ||
          "Invalid email or password.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------- REGISTER ----------------

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Weak password",
        description: "Password must contain at least 6 characters.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please enter the same password in both fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );

      toast({
        title: "OTP sent!",
        description: "Check your email for the verification code.",
      });

      setOtp("");
      setOtpTimeLeft(OTP_EXPIRY_SECONDS);
      setShowOTP(true);
    } catch (error: any) {
      console.error("Registration Error:", error);

      toast({
        title: "Registration failed",
        description:
          error.response?.data?.message ||
          "Unable to create account.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------- VERIFY OTP ----------------

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/api/auth/verify-email-otp`,
        {
          email,
          otp,
        }
      );

      const { token, user } = res.data;

      if (!token || !user) {
        throw new Error("Invalid verification response");
      }

      login(token, {
        _id: user._id || user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || "",
        bio: user.bio || "",
      });

      toast({
        title: "Email verified!",
        description: "Your account has been created successfully.",
      });

      navigate("/profile");
    } catch (error: any) {
      console.error("OTP Verification Error:", error);

      toast({
        title: "Verification failed",
        description:
          error.response?.data?.message ||
          "Invalid or expired OTP.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------- RESEND OTP ----------------

  const handleResendOTP = async () => {
    try {
      await axios.post(
        `${API_URL}/api/auth/resend-verification-otp`,
        {
          email,
        }
      );

      toast({
        title: "OTP sent!",
        description: "A new OTP has been sent to your email.",
      });
      setOtp("");
      setOtpTimeLeft(OTP_EXPIRY_SECONDS);

    } catch (error: any) {
      toast({
        title: "Failed",
        description:
          error.response?.data?.message ||
          "Unable to resend OTP.",
        variant: "destructive",
      });
    }
  };

  // ---------------- OTP SCREEN ----------------

  const pageBackground =
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85";

  if (showOTP) {
    return (
      <div
        className="lw-auth-page relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(5, 12, 35, 0.88), rgba(25, 18, 65, 0.72)), url("${pageBackground}")`,
        }}
      >
        <style>{`
          @keyframes lw-fade-up {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes lw-float {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
            50% { transform: translate3d(0, -22px, 0) rotate(7deg); }
          }
          @keyframes lw-drift {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(18px, -16px, 0); }
          }
          @keyframes lw-glow {
            0%, 100% { opacity: .35; }
            50% { opacity: .75; }
          }
          .lw-fade-up { animation: lw-fade-up .7s cubic-bezier(.2,.8,.2,1) both; }
          .lw-float { animation: lw-float 8s ease-in-out infinite; }
          .lw-drift { animation: lw-drift 10s ease-in-out infinite; }
          .lw-glow { animation: lw-glow 5s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .lw-fade-up, .lw-float, .lw-drift, .lw-glow { animation: none !important; }
          }
        `}</style>

        <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl lw-glow" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl lw-glow" />
        <div className="pointer-events-none absolute left-[12%] top-[18%] h-16 w-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm lw-float" />
        <div className="pointer-events-none absolute bottom-[15%] right-[12%] h-12 w-12 rounded-full border border-white/20 bg-violet-300/20 backdrop-blur-sm lw-drift" />

        <div className="relative z-10 w-full max-w-md lw-fade-up">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl font-black text-white shadow-xl backdrop-blur-md">
              L
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">LearnWell</p>
            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Verify your email</h1>
            <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">
              Enter the 6-digit verification code sent to
            </p>
            <p className="mt-1 break-all font-semibold text-violet-200">{email}</p>
          </div>

          <form
            onSubmit={handleVerifyOTP}
            className="space-y-5 rounded-3xl border border-white/25 bg-slate-950/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8"
          >
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              inputMode="numeric"
              className="h-14 border-white/30 bg-white text-center text-xl font-bold tracking-[0.5em] text-slate-900 placeholder:text-slate-400"
            />

            <div className="text-center text-sm">
              {otpTimeLeft > 0 ? (
                <p className="text-slate-200">
                  OTP expires in <span className="font-bold text-violet-200">{formattedOTPTime}</span>
                </p>
              ) : (
                <p className="font-semibold text-rose-300">OTP has expired. Please resend a new OTP.</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading || otpTimeLeft === 0}
              className="h-14 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-base font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500"
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
              {otpTimeLeft === 0 ? "OTP Expired" : "Verify Email"}
            </Button>

            <button
              type="button"
              onClick={handleResendOTP}
              className="w-full text-center text-sm font-semibold text-violet-200 transition hover:text-white"
            >
              Resend OTP
            </button>
            <button
              type="button"
              onClick={() => setShowOTP(false)}
              className="w-full text-center text-sm text-slate-300 transition hover:text-white"
            >
              Back to registration
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ---------------- AUTH SCREEN ----------------

  return (
    <div
      className="lw-auth-page relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 lg:justify-end lg:px-[8vw]"
      style={{
        backgroundImage: `linear-gradient(105deg, rgba(4, 12, 32, 0.78), rgba(8, 13, 38, 0.58)), url("${pageBackground}")`,
      }}
    >
      <style>{`
        @keyframes lw-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lw-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -22px, 0) rotate(7deg); }
        }
        @keyframes lw-drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(18px, -16px, 0); }
        }
        @keyframes lw-glow {
          0%, 100% { opacity: .35; }
          50% { opacity: .75; }
        }
        .lw-fade-up { animation: lw-fade-up .7s cubic-bezier(.2,.8,.2,1) both; }
        .lw-float { animation: lw-float 8s ease-in-out infinite; }
        .lw-drift { animation: lw-drift 10s ease-in-out infinite; }
        .lw-glow { animation: lw-glow 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .lw-fade-up, .lw-float, .lw-drift, .lw-glow { animation: none !important; }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl lw-glow" />
      <div className="pointer-events-none absolute bottom-0 left-[35%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl lw-glow" />
      <div className="pointer-events-none absolute left-[9%] top-[18%] hidden h-20 w-20 rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm lw-float lg:block" />
      <div className="pointer-events-none absolute bottom-[16%] left-[42%] hidden h-14 w-14 rounded-full border border-white/20 bg-violet-300/20 backdrop-blur-sm lw-drift lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(390px,480px)]">
        <div className="hidden max-w-xl text-white lw-fade-up lg:block">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 font-black">L</span>
            <span className="text-sm font-semibold tracking-[0.2em]">LEARNWELL</span>
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">Learn something. Grow every day.</p>
          <h2 className="text-5xl font-extrabold leading-[1.12] xl:text-6xl">
            Your next skill
            <span className="block bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">starts here.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-200">
            Build your knowledge, explore new topics, and keep moving towards your goals with LearnWell.
          </p>
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            A better way to learn, at your own pace.
          </div>
        </div>

        <div className="w-full max-w-md justify-self-center lw-fade-up">
          <div className="mb-6 text-center lg:hidden">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-xl font-black text-white backdrop-blur-md">L</div>
            <p className="text-xs font-bold tracking-[0.3em] text-violet-200">LEARNWELL</p>
            <h1 className="mt-2 text-3xl font-extrabold text-white">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="mt-2 text-sm text-slate-200">
              {mode === "login" ? "Login to continue learning" : "Start your learning journey"}
            </p>
          </div>

          <div className="rounded-3xl border border-white/25 bg-slate-950/55 p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8">
            <div className="mb-7 hidden text-center lg:block">
              <h1 className="text-3xl font-extrabold text-white">
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="mt-2 text-sm text-slate-300">
                {mode === "login" ? "Login to continue learning" : "Create your LearnWell account"}
              </p>
            </div>

            <div className="mb-6 grid grid-cols-2 rounded-xl border border-white/10 bg-black/20 p-1">
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setPassword("");
                  setConfirmPassword("");
                }}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  mode === "login"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setPassword("");
                  setConfirmPassword("");
                }}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  mode === "register"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>

            <form
              key={mode}
              onSubmit={mode === "login" ? handleLogin : handleRegister}
              className="space-y-4"
            >
              {mode === "register" && (
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  autoComplete="name"
                  className="h-12 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
                />
              )}

              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                autoComplete="email"
                className="h-12 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
              />

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  className="h-12 border-white/20 bg-white/95 pr-12 text-slate-900 placeholder:text-slate-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-violet-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {mode === "register" && (
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    className="h-12 border-white/20 bg-white/95 pr-12 text-slate-900 placeholder:text-slate-500 transition duration-200 focus-visible:ring-2 focus-visible:ring-violet-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-violet-700"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-base font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/25 disabled:translate-y-0"
              >
                {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {mode === "login" ? "Login to LearnWell" : "Create Account"}
              </Button>
            </form>

            <p className="mt-6 text-center text-xs leading-5 text-slate-300">
              {mode === "login" ? "New to LearnWell? Use the Register tab above to get started." : "Already have an account? Select Login above."}
            </p>
          </div>
          <p className="mt-5 text-center text-xs text-slate-300/80">© {new Date().getFullYear()} LearnWell. Keep learning.</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
