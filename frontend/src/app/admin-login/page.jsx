'use client'

import { toast } from "react-toastify";
import { Axiosinstance } from "../utils/helper";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter()
  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    Axiosinstance.post('/admin/login', data, { withCredentials: true }).then((res) => {
      toast.success(res.data.msg)
      if (res.status == 201) {
        setTimeout(() => {
          router.push('/admin')
        }, 5000);
      }

    }).catch((error) => {
      console.log(error)
      toast.warning(error.response.data.msg)
    })
  }


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-700/20" />
        <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-700/20" />
      </div>

      <main className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Showcase panel */}
        <section className="hidden lg:flex flex-col justify-between rounded-3xl p-10 bg-white/70 dark:bg-white/5 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-8">
              {/* Inline logo */}
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-white font-bold">A</div>
              <span className="text-xl font-semibold text-slate-800 dark:text-slate-100">Admin Console</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Welcome back, Admin
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Sign in to access your dashboard, manage users, and review system
              activity. Secure, fast, and beautifully minimal.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
            {[
              "Role-Based Access",
              "Two-Factor Ready",
              "Audit Trails",
              "SSO Compatible",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl bg-slate-100/70 dark:bg-white/5 px-3 py-2 ring-1 ring-black/5 dark:ring-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.94a.75.75 0 1 0-1.22-.84l-3.142 4.57-1.73-1.73a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.147-.094l3.815-5.216Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Auth card */}
        <section className="rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 lg:p-10 ring-1 ring-black/5 dark:ring-white/10 shadow-2xl">
          <div className="mx-auto w-full max-w-md">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-white text-sm font-bold">
                  🔐
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sign in</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">to your admin account</p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-inset ring-slate-300 dark:ring-white/20 hover:ring-indigo-400 dark:hover:ring-indigo-500 transition"
                aria-label="Switch theme"
                title="Theme"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm0 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM3.22 5.72a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 1 1-1.06 1.06L3.22 6.78a.75.75 0 0 1 0-1.06Zm14.086 10.586a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 1 1-1.06 1.06l-1.414-1.414a.75.75 0 0 1 0-1.06ZM2.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 2.25 12Zm15 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-.586-6.28a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 1 1-1.06 1.06L17.724 6.78a.75.75 0 0 1 0-1.06ZM5.72 18.28a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 1 1-1.06 1.06L5.72 19.34a.75.75 0 0 1 0-1.06ZM12 18.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" />
                </svg>
                <span className="sr-only">Theme</span>
              </button>
            </div>

            <form method="post" className="space-y-6" onSubmit={loginHandler}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="admin@company.com"
                    autoComplete="username"
                    className="peer w-full rounded-2xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 pr-10 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-slate-400 peer-focus:text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M1.5 8.67l9.26 6.27c.72.49 1.76.49 2.48 0l9.26-6.27A2.25 2.25 0 0 0 20.25 6H3.75A2.25 2.25 0 0 0 1.5 8.67Zm0 1.94v6.19A2.25 2.25 0 0 0 3.75 19.5h16.5A2.25 2.25 0 0 0 22.5 16.8V10.6l-8.81 5.97a3.75 3.75 0 0 1-4.38 0L1.5 10.6Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    required
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="peer w-full rounded-2xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 pr-12 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                  />
                  <button
                    type="button"
                    aria-label="Show password"
                    title="Show password"
                    className="absolute inset-y-0 right-2 grid place-items-center rounded-xl px-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 5c-7.633 0-10 7-10 7s2.367 7 10 7 10-7 10-7-2.367-7-10-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 select-none">
                  <input type="checkbox" name="remember" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  Remember me
                </label>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 shadow-lg shadow-indigo-600/20 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition"
              >
                Sign in
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200 dark:border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white/80 dark:bg-slate-900/60 px-2 text-slate-500">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["Google", "GitHub", "SAML"].map((provider) => (
                  <button
                    key={provider}
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition"
                  >
                    <span className="sr-only">Continue with {provider}</span>
                    <span>{provider}</span>
                  </button>
                ))}
              </div>

              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                By continuing, you agree to the <a href="#" className="underline decoration-dotted underline-offset-2">Terms</a> and <a href="#" className="underline decoration-dotted underline-offset-2">Privacy</a>.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
