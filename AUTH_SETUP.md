# Authentication setup (work in progress)

This revision removes the fake localStorage login and connects the UI to Better Auth. It has **not** been verified against your Google Cloud project or live hosting.

1. Keep `.env.local` private and replace the previously exposed `BETTER_AUTH_SECRET` with a new cryptographically random secret.
2. Install dependencies with `npm install`.
3. Better Auth needs its `user`, `session`, `account`, and `verification` tables created before registration. Run `npm run db:migrate` from the project root. This invokes the migration API included in Better Auth 1.6.9; **starting Express alone does not create tables**.
4. Run `npm run server` and `npm run dev` in separate terminals.
5. Set up a Google Cloud OAuth web client and configure `http://localhost:5000/api/auth/callback/google` as an authorized redirect URI. Add real `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` only to `.env.local`.
6. For deployment, use a persistent hosted database and deployed backend, then update `BETTER_AUTH_URL`, `VITE_AUTH_URL`, Google callback URLs and allowed origins. A local SQLite file on an ephemeral serverless filesystem is not suitable for production.
7. Test registration, login, logout, refresh, protected routes, Google login and profile updates before submission.

Do not commit `.env.local` or database files. The original ZIP contained a local secret; rotate it and check repository history if previously committed.
