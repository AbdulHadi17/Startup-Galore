import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks:{
    async signIn({user:{name,image,email},profile}){

      const {login,bio,id} = profile || {};
     console.log("My Id is:"+ id +"\n\n\n\n");
      const existingUser = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY,{id});

      if(!existingUser){
        await writeClient.create({
          _type:'author',
          id,
          name,
          image,
          email,
          bio,
          username:login,


        })
      }

      return true;
    },
    async jwt({token,account,profile}){
      
      if(account && profile){
        const user = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY,{id:profile?.id});
        token.id = user?._id;
      }
      return token;
    },
    async session({session,token}){
      Object.assign(session,{id:token?.id})
      return session;
    }
  }
})