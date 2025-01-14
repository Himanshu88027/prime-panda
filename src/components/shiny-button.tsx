import { cn } from '@/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { AnchorHTMLAttributes, ReactNode } from 'react'

interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ShinyButton = ({children, className, href, ...props} : ShinyButtonProps) => {
  return (
    <Link href={href ?? "#"} {...props} className={cn("group realtive transform flex items-center justify-center whitespace-nowrap overflow-hidden border border-white text-white px-8 hover:ring-2 hover:ring-offset-2 transition-all duration-300 font-medium hover:ring-brand-500 gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-500 text-base/7", className)}>
        <span className='flex items-center gap-2 relative z-10'>
            {children}
        </span>
        <ArrowRight className='size-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-[2px]' />
        <div className='ease-[cubic-bezier(0.19,1,0.22,1)] -z-10 duration-700 absolute -left-[75px] -top-[50px] w-8 h-[150px] bg-white opacity-20 rotate-[35deg] group-hover:left-[120%]' />
    </Link>
  )
}
