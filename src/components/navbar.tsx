import Link from "next/link"
import React from "react"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"

export const Navbar = async () => {
  const user = await currentUser()
  return (
    <nav className="sticky z-[100] h-16 inset-0 bg-white/80 backdrop-blur-lg top-0 transition-all border-b border-gray-200">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            Prime<span className="text-brand-400">Panda</span>
          </Link>
          <div className="flex justify-center items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Sign Out
                  </Button>
                </SignOutButton>
                <Link
                  href="/dashboard"
                  className={ buttonVariants({                  
                    size: "sm", 
                    className: "flex items-center gap-1.5",
                  })}
                >
                  Dashboard 
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </>
            ) : <>
                <Link
                  href="/pricing"
                  className={ buttonVariants({
                    variant: "ghost",            
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={ buttonVariants({
                    variant: "ghost",            
                    size: "sm",
                  })}
                >
                  Sign in
                </Link>
                <div className="w-px h-8 bg-gray-200" />
                <Link
                  href="/sign-up"
                  className={ buttonVariants({                  
                    size: "sm", 
                    className: "flex items-center gap-1.5",
                  })}
                >
                  Sign up 
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
            </>}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
