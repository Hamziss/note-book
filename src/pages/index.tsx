import type { NextPage } from "next"
import Image from "next/image"
import React, { useState } from "react"
import { ChromePicker } from "react-color"
import Pipeline from "../../public/images/pipeline.png"
import Note from "../components/Note"
import TechStack from "../components/techStack"
import useClickOutside from "../hooks/useClickOutside"
import { trpc } from "../utils/trpc"

import LinearProgress from "@mui/material/LinearProgress"
import Head from "next/head"

export type INote = {
	title: string
	content: string
	id: number
}

const Notes: NextPage = () => {
	//state
	const [showTitleInput, setshowTitleInput] = useState(false)
	const [showPipeline, setShowPipeline] = useState(false)
	const [color, setColor] = useState("#ffffff")
	//trpc query
	const { data: Notes, refetch } = trpc.useQuery(["note.getAll"])
	const addnote = trpc.useMutation("note.create")

	const onChangeMethod = (color: any) => {
		setColor(color.hex)
	}
	const domNode = useClickOutside(() => {
		setshowTitleInput(false)
	})
	const refPip = useClickOutside(() => {
		setShowPipeline(false)
	})

	const AddNoteHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const note = Object.fromEntries(formData) as any
		note.color = color
		addnote.mutate(note, {
			onSuccess: () => {
				console.log("success")
				refetch()
			},
			onError: (err) => {
				console.log(err.message)
			},
		})
	}

	return (
		<>
			<Head>
				<title>Notes Book</title>
				<meta name="description" content="Notes" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			{addnote.isLoading && <LinearProgress color="success" />}
			<div className="flex sm:gap-5 sm:m-10 gap-2 flex-col m-2  items-center">
				<TechStack />
				<form
					className={`flex  min-w-[300px] postNoteShadow gap-3 flex-col items-center w-1/4 p-3 rounded-md`}
					ref={domNode}
					onSubmit={AddNoteHandler}
					style={{ backgroundColor: color }}
				>
					{showTitleInput ? (
						<input
							type="text"
							name="title"
							defaultValue=""
							placeholder="Title..."
							className="p-2 h-[40px] text-3xl fonts w-full "
						/>
					) : (
						""
					)}
					<textarea
						onClick={() => setshowTitleInput(true)}
						defaultValue=""
						name="content"
						className="p-2 outline-none w-full min-h-[150px] resize-none "
						placeholder="Write a note..."
						style={{ backgroundColor: color }}
					/>

					<div className="flex  items-center w-full">
						<div className="relative ml-auto">
							<Image
								onClick={() => setShowPipeline(!showPipeline)}
								src={Pipeline}
								className="cursor-pointer"
								alt="pipeline"
								width={20}
								height={19}
							/>
							<div className="absolute z-10" ref={refPip}>
								{showPipeline && (
									<ChromePicker color={color} onChange={onChangeMethod} />
								)}
							</div>
						</div>
						<div className="ml-2">
							<button
								className="bg-purple text-white p-2 h-10 rounded-md ml-auto"
								type="submit"
							>
								Post
							</button>
						</div>
					</div>
				</form>
				<div className="gap-6 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-10 grid-cols-1 justify-items-center grid w-full ">
					{Notes?.map((note) => {
						return <Note note={note} key={note.id} />
					})}
				</div>
			</div>
		</>
	)
}

export default Notes
