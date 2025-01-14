import { currentUser } from "@clerk/nextjs/server"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"
import { db } from "@/db"

export const authRouter = router({
  getDatabaseSyncStatus: publicProcedure.query(async ({ c, ctx }) => {
    const auth = await currentUser()

    // console.log(auth);
    

    if (!auth) {
      return c.json({ isSynced: false })
    }

    const user = await db.user.findFirst({
      where: { externalId: auth.id },
    })

    console.log("User found in database:", user);

    if (!user) {
        console.log("true");
    } else {
        console.log("false");
    }

    if (!user) {
      const newUser = await db.user.create({
        data: {
          quotaLimit: 100,
          email: auth.emailAddresses[0].emailAddress,
          externalId: auth.id,
        },
      })
      console.log("New user created:", newUser);
      console.log("1");
      
      return c.json({ isSynced: true })
    }
    console.log("2");
    
    return c.json({ isSynced: true })
  }),
})
