import createMiddleware from "next-intl/middleware";
export { auth as middleware } from "../auth";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
