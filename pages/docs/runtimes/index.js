import RuntimeDocs from '~/components/references-mdx/runtimes/index.mdx'
import ReferenceLayout from '~/components/layout/reference'

export default () => (
  <ReferenceLayout
    Data={<RuntimeDocs />}
    title="Official ZEIT Now Runtimes"
    description="A complete reference of Runtimes on ZEIT Now; listing official runtimes and their usage."
    defaultActiveCategory="official-runtimes"
  />
)
