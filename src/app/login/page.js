import AuthFormTitle from "@/components/shared/AuthFormTitle";
import Container from "@/components/shared/Container";
import InputField from "@/ui/InputField";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen px-4 py-10 md:pt-32">
      <Container>
        <div className="bg-midnight mx-auto w-full max-w-lg rounded-xl p-8 text-white">
          <AuthFormTitle
            title="Welcome Back"
            subtitle="Log in to continue your language learning journey"
          />

          <form className="mt-8 space-y-6">
            <InputField
              label="Email Address"
              name="email"
              id="email"
              type="email"
              placeholder="you@example.com"
            />

            <InputField
              label="Password"
              name="password"
              id="password"
              type="password"
              placeholder="••••••••"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label
                  htmlFor="remember"
                  className="text-charcoal mt-0.5 text-xs"
                >
                  Remember me
                </label>
              </div>

              <Link href="/" className="text-lavender text-xs font-medium">
                Forgot password?
              </Link>
            </div>

            <button className="bg-purple w-full rounded-md py-3.5 text-sm">
              Log In
            </button>

            <div className="flex items-center justify-center gap-2">
              <p className="text-charcoal text-sm">
                Don&apos; have an account?
              </p>
              <Link
                href="/signup"
                className="text-lavender text-sm font-medium"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
