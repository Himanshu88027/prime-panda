import { cn } from "@/utils"

interface MaxWidthWrapperProps {
  children: React.ReactNode
  className?: string
}

export const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full max-w-screen-xl mx-auto px-2.5 w-full md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}