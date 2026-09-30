import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
        "http://localhost:5000/api/auth/login",
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
        "http://localhost:5000/api/auth/register",
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
        "http://localhost:5000/api/auth/verify-email-otp",
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
        "http://localhost:5000/api/auth/resend-verification-otp",
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

  if (showOTP) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020817] px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">
              Verify Your Email
            </h1>

            <p className="mt-3 text-lg text-slate-300">
              Enter the 6-digit OTP sent to
            </p>

            <p className="mt-1 font-semibold text-violet-400">
              {email}
            </p>
          </div>

          <form onSubmit={handleVerifyOTP} className="space-y-5">
            <Input
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              inputMode="numeric"
              className="h-14 border-slate-600 bg-white text-center text-xl font-bold tracking-[0.5em] text-black placeholder:text-slate-400"
            />
             

            <div className="text-center">
               {otpTimeLeft > 0 ? (
                <p className="text-sm text-slate-300">
                   OTP expires in{" "}
                  <span className="font-bold text-violet-400">
                   {formattedOTPTime}
                  </span>
                </p>
                    ) : (
                        <p className="text-sm font-semibold text-red-400">
                            OTP has expired. Please resend a new OTP.
                      </p>
                     )}
              </div>  

            <Button
            type="submit"
            disabled={loading || otpTimeLeft === 0}
            className="h-14 w-full bg-violet-500 text-lg hover:bg-violet-600"
>
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : null}
              {otpTimeLeft === 0 ? "OTP Expired" : "Verify Email"}
            </Button>

            <button
              type="button"
              onClick={handleResendOTP}
              className="w-full text-center font-medium text-violet-400 hover:text-violet-300"
            >
              Resend OTP
            </button>

            <button
              type="button"
              onClick={() => setShowOTP(false)}
              className="w-full text-center text-slate-300 hover:text-white"
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
    <div className="flex min-h-screen items-center justify-center bg-[#020817] px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-3 text-lg text-slate-300">
            {mode === "login"
              ? "Login to continue learning"
              : "Create your LearnWell account"}
          </p>
        </div>

        <form
          onSubmit={
            mode === "login"
              ? handleLogin
              : handleRegister
          }
          className="space-y-5"
        >
          {/* Name */}
          {mode === "register" && (
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              autoComplete="name"
              className="h-14 border-slate-500 bg-white text-black placeholder:text-slate-500"
            />
          )}

          {/* Email */}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            className="h-14 border-slate-500 bg-white text-black placeholder:text-slate-500"
          />

          {/* Password */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete={
                mode === "login"
                  ? "current-password"
                  : "new-password"
              }
              className="h-14 border-slate-500 bg-white pr-12 text-black placeholder:text-slate-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          {mode === "register" && (
            <div className="relative">
              <Input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm Password"
                autoComplete="new-password"
                className="h-14 border-slate-500 bg-white pr-12 text-black placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="h-14 w-full bg-violet-500 text-lg text-white hover:bg-violet-600"
          >
            {loading && (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            )}

            {mode === "login"
              ? "Login"
              : "Create Account"}
          </Button>
        </form>

        {/* Switch Login/Register */}
        <div className="mt-8 text-center text-lg text-white">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setPassword("");
                  setConfirmPassword("");
                }}
                className="font-semibold text-violet-400 hover:text-violet-300"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setPassword("");
                  setConfirmPassword("");
                }}
                className="font-semibold text-violet-400 hover:text-violet-300"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;