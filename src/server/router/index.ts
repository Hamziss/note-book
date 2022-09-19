// src/server/router/index.ts
import superjson from "superjson"
import { createRouter } from "./context"

import { exampleRouter } from "./example"
import { noteRouter } from "./Note"

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("example.", exampleRouter)
	.merge("note.", noteRouter)

// export type definition of API
export type AppRouter = typeof appRouter
