import { Note } from "@prisma/client"
import dayjs from "dayjs"
import Image from "next/image"
import Delete from "../../../public/images/delete.svg"
import { trpc } from "../../utils/trpc"
interface IProps {
	note: Note
}

const Note = ({ note }: IProps) => {
	const deletePost = trpc.useMutation("note.delete")
	const Notes = trpc.useQuery(["note.getAll"])

	const deleteNoteHandler = (id: string) => {
		deletePost.mutate(id, {
			onSuccess: () => {
				Notes.refetch()
			},
			onError: (err) => {
				console.log(err.message)
			},
		})
	}
	return (
		<div
			style={{ backgroundColor: note.color }}
			className={` p-3 flex flex-col gap-2 relative break-all hover:-translate-y-[2px] translate duration-200 noteShadow w-full min-h-[224px] rounded-[8px]`}
		>
			<h3 className="text-2xl font-Poppins font-semibold">
				{note.title ? note.title : "Empty Title"}
			</h3>
			<p className="mt-2 font-Poppins">{note.content}</p>
			<div className="mt-auto">
				{dayjs(note.createdAt).format("HH:m ddd M, YYYY")}
			</div>
			<button
				className="bottom-2 absolute opacity-60 hover:opacity-100 right-2 w-5 h-5 cursor-pointer"
				onClick={() => deleteNoteHandler(note.id)}
			>
				<Image src={Delete} alt="delete" />
			</button>
		</div>
	)
}

export default Note
