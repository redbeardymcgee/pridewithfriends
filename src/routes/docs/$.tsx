import { MDXContent } from "@content-collections/mdx/react"
import { mdxComponents } from "@prose-ui/react"
import { createFileRoute, notFound } from "@tanstack/react-router"
import { allDocs } from "content-collections"
import { Folder, Plus } from "lucide-react"
import {
  ExampleText,
  PrideGradient,
  TutorialText,
  WarningText,
} from "#/components/typography"
import { CurrentYear } from "#/components/utils"

const components = {
  ...mdxComponents,
  CurrentYear,
  ExampleText,
  Folder,
  Plus,
  PrideGradient,
  TutorialText,
  WarningText,
}

const findPage = (pathArr: string[]) => {
  const path = pathArr && pathArr.length > 0 ? `${pathArr.join("/")}` : "/"
  return allDocs.find((doc) => doc._meta.path === path)
}

export const Route = createFileRoute("/docs/$")({
  component: DocPage,
  loader: async ({ params }) => {
    const pathSegments = params._splat
      ? params._splat.split("/").filter(Boolean)
      : []
    const page = findPage(pathSegments)

    if (!page) {
      throw notFound()
    }

    return { page }
  },
})

function DocPage() {
  const { page } = Route.useLoaderData()

  if (!page) {
    throw notFound()
  }

  return (
    <div className="min-h-screen w-full bg-[hsl(var(--p-color-bg))]">
      <article className="prose-ui mx-auto w-full max-w-3xl px-4 py-8">
        <MDXContent code={page.mdx} components={components} />
      </article>
    </div>
  )
}
