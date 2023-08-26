import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/',
    }
})

export const config = {
    matcher : [
        "/home/:path*", 
        "/articles/:path*",
        "/accessories/:path*",
        "/aboutus/:path*",
        "/upcoming/:path*"
    ]
}