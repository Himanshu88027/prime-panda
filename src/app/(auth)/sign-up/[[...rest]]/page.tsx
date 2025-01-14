import { SignUp } from "@clerk/nextjs"

const Page = () => {
    return (
        <div className="w-full flex flex-1 justify-center items-center">
            <SignUp />
        </div>
    )
}

export default Page