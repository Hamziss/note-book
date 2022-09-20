// src/server/router/index.ts
import superjson from "superjson"
import { createRouter } from "./context"

import { noteRouter } from "./Note"

export const appRouter = createRouter()
	.transformer(superjson)

	.merge("note.", noteRouter)

// export type definition of API
export type AppRouter = typeof appRouter
