import NowCLIDocs from '~/components/references-mdx/now-cli/index.mdx'
import ReferenceLayout from '~/components/layout/reference'

export default () => (
  <ReferenceLayout
    Data={<NowCLIDocs />}
    title="Now CLI Reference"
    description="A complete reference of the Now CLI detailing the available commands, their usage and optional flags"
  />
)
