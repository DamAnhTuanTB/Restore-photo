import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Comment dòng adapter này lại để chưa cần thiết phải sử dụng prisma để kết nối tới cơ sở dữ liệu
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: "anhtuantb2422",
};

export default NextAuth({
  ...authOptions,
});
