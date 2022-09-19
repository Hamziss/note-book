import Image from "next/image"
import nextjs from "../../../public/images/next.png"
import prisma from "../../../public/images/prisma.png"
import tailwind from "../../../public/images/tailwind.png"
import trpc from "../../../public/images/tRPC.png"
import ts from "../../../public/images/ts.png"

const TechStack = () => {
	return (
		<div className="sm:gap-5 gap-1 flex justify-center items-center  h-24">
			<a
				target="_blank"
				href="https://www.typescriptlang.org/"
				rel="noreferrer"
			>
				<Image placeholder="blur" src={ts} alt="ts" width={50} height={50} />
			</a>
			<span className="text-2xl">+</span>
			<a target="_blank" href="https://nextjs.org/" rel="noreferrer">
				<Image
					placeholder="blur"
					src={nextjs}
					alt="nextjs"
					width={55}
					height={55}
				/>
			</a>
			<span className="text-2xl">+</span>
			<a target="_blank" href="https://trpc.io/" rel="noreferrer">
				<Image
					src={trpc}
					placeholder="blur"
					alt="trpc"
					width={52}
					height={60}
				/>
			</a>
			<span className="text-2xl">+</span>
			<a target="_blank" href="https://tailwindcss.com/" rel="noreferrer">
				<Image
					src={tailwind}
					placeholder="blur"
					alt="tailwind"
					width={68}
					height={67}
				/>
			</a>
			<span className="text-2xl font-bold">+</span>
			<a target="_blank" href="https://www.prisma.io/" rel="noreferrer">
				<Image
					src={prisma}
					placeholder="blur"
					alt="prisma"
					width={43}
					height={55}
				/>
			</a>
		</div>
	)
}

export default TechStack
