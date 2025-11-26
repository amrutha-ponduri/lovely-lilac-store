import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthButtons } from "@/components/AuthButtons";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=1600&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-primary-foreground">
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-8">
            <span className="text-3xl font-bold">B</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Join the<br />Bloom Family
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-md">
            Create an account to get exclusive access to new arrivals, sales, and personalized recommendations.
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-medium/30 blur-3xl" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">B</span>
            </div>
            <span className="text-3xl font-bold text-gradient">Bloom</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Create Account</h2>
            <p className="text-muted-foreground">Start your fashion journey with us</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 h-12 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/30"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/30"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold text-lg transition-all mt-6"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-muted-foreground">or continue with</span>
            </div>
          </div>

          <AuthButtons isSignup />

          <p className="text-center mt-6 text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
