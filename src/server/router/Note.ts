import { z } from "zod"
import { createRouter } from "./context"

export const noteRouter = createRouter()
	.query("getAll", {
		async resolve({ ctx }) {
			return await ctx.prisma.note.findMany({
				orderBy: {
					createdAt: "desc",
				},
			})
		},
	})
	.mutation("create", {
		input: z.object({
			title: z.string(),
			content: z.string(),
			color: z.string(),
		}),
		async resolve({ ctx, input }) {
			return await ctx.prisma.note.create({
				data: input,
			})
		},
	})
	.mutation("delete", {
		input: z.string(),
		async resolve({ ctx, input }) {
			return await ctx.prisma.note.delete({
				where: {
					id: input,
				},
			})
		},
	})
