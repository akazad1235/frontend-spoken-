import AuthFormTitle from "@/components/shared/AuthFormTitle";
import Container from "@/components/shared/Container";
import InputField from "@/ui/InputField";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen px-4 py-10 md:pt-32">
      <Container>
        <div className="bg-midnight mx-auto w-full max-w-lg rounded-xl p-8 text-white">
          <AuthFormTitle
            title="Create an Account"
            subtitle="Join our community of language learners"
          />

          <form className="mt-8 space-y-6">
            <InputField
              label="Full Name"
              name="name"
              id="name"
              placeholder="John Doe"
            />

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

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <div className="text-charcoal text-xs">
                I agree to the{" "}
                <Link href="/" className="text-lavender text-xs">
                  Terms of Service{" "}
                </Link>
                and{" "}
                <Link href="/" className="text-lavender text-xs">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <button className="bg-purple w-full rounded-md py-3.5 text-sm">
              Log In
            </button>

            <div className="flex items-center justify-center gap-2">
              <p className="text-charcoal text-sm">Already have an account?</p>
              <Link href="/" className="text-lavender text-sm font-medium">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
