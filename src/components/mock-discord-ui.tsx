import React, { PropsWithChildren } from "react"
import { Icon } from "./icons"
import { Cog, Gift, Headphones, HelpCircle, Inbox, Menu, Mic, Phone, Pin, PlusCircle, Search, Smile, Sticker, UserCircle, Video } from "lucide-react"
import Image from "next/image"

export const MockDiscordUi = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1200px] min-h-[800px] flex overflow-hidden text-white bg-discord-gray rounded-lg shadow-xl">
      {/* sidebar */}
      <div className="hidden sm:flex bg-[#202225] w-[72px] py-3 flex-col items-center">
        <div className="bg-discord-brand-color size-12 flex justify-center items-center rounded-2xl hover:rounded-xl mb-3 transition-all duration-200">
          <Icon.Discord className="size-3/5 text-white" />
        </div>
        <div className="w-8 h-px bg-discord-gray mb-3" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-discord-gray size-12 flex justify-center items-center rounded-3xl hover:rounded-2xl hover:bg-discord-brand-color mb-3 transition-all duration-200 cursor-not-allowed"
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}
        <div className="group bg-discord-gray size-12 mt-auto flex justify-center items-center rounded-3xl hover:rounded-2xl hover:bg-[#3ba55c] transition-all duration-200 cursor-not-allowed">
          <PlusCircle className="text-[#3ba55c] group-hover:text-white transition-colors duration-200" />
        </div>
      </div>
      {/* dm list */}
      <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
        <div className="h-16 flex items-center px-2 border-b shadow-sm border-[#202225]">
          <div className="w-full bg-[#202225] text-sm rounded h-8 px-2 flex justify-center items-center text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <UserCircle className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Inbox className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
          </div>

          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8e9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>

            <div className="flex items-center px-2 py-1.5 rounded bg-[#393c43] text-white cursor-pointer">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingPanda Avatar"
                width={32}
                height={32}
                className="object-cover rounded-full mr-3"
              />
              <span className="font-medium">PrimePanda</span>
            </div>
            <div className="my-1 space-y-px">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed"
                >
                  <div className="size-8 rounded-full bg-discord-gray mr-3" />
                  <span className="font-medium">User {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#b9bbbe] flex items-center">
              @your_account
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Mic className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <Headphones className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <Cog className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="flex-1 flex flex-col">
        {/* dm header */}
        <div className="h-16 flex items-center px-4 border-b shadow-sm border-[#202225]">
          <div className="md:hidden mr-4">
            <Menu className="size-6 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center">
            <div className="relative">
              <Image width={40} height={40} src="/brand-asset-profile-picture.png" alt="prime panda logo" 
              className="object-cover rounded-full mr-3"/>
              <div className="absolute size-3 bg-green-500 bottom-0 right-3 border-[#36393f] border-2 rounded-full"></div>
            </div>
            <p className="font-semibold text-white">PrimePanda</p>
          </div>
          <div className="ml-auto text-[#b9bbbe] flex items-center space-x-4">
            <Phone className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Video className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Pin className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <UserCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Search className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Inbox className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <HelpCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
          </div>
        </div>
        {/* message history */}
        <div className="flex flex-1 flex-col-reverse p-4 overflow-y-auto bg-discord-gray">
          {children}
        </div>

        {/* message input */}
        <div className="p-4">
          <div className="flex items-center bg-[#40444b] rounded-lg p-1">
            <PlusCircle className="mx-3 text-[#b9bbbe] hover:text-white cursor-not-allowed" />
            <input type="text" readOnly
              placeholder="Message @Primepanda"
              className="flex-1 bg-transparent py-2.5 px-1 text-white placeholder:text-[#72767d] focus:outline-none cursor-not-allowed"
             />
             <div className="flex items-center space-x-3 text-[#b9bbbe]">
             <Gift className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
             <Sticker className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
             <Smile className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
