import IntegrationsDocs from '~/components/references-mdx/integrations/index.mdx'
import ReferenceLayout from '~/components/layout/reference'

export default () => (
  <ReferenceLayout
    Data={<IntegrationsDocs />}
    title="ZEIT Now Integrations Documentation"
    description="A comprehensive guide to creating and using the ZEIT Now Integrations API and gaining control over the ZEIT Now platform."
    defaultActiveCategory="introduction"
    defaultActiveSection="zeit-integrations"
  />
)
