import ConfigurationRef from '~/components/references-mdx/configuration/index.mdx'
import ReferenceLayout from '~/components/layout/reference'

export default () => (
  <ReferenceLayout
    Data={<ConfigurationRef />}
    title="Configuration"
    description="A complete reference of configuration for ZEIT Now deployments; listing configuration options and their usage."
    defaultActiveCategory="introduction"
    defaultActiveSection="configuration-reference"
  />
)
