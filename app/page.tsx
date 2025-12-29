import { LoginForm } from "@/components/login-form"
import { LoginWelcomeModal } from "@/components/login-welcome-modal"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LoginWelcomeModal />
      <LoginForm />
    </div>
  )
}
