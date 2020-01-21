import ApiDocs from '~/components/references-mdx/api/v2/index.mdx'
import ReferenceLayout from '~/components/layout/reference'

export default () => (
  <ReferenceLayout
    Data={<ApiDocs />}
    versioned
    description="A comprehensive guide to using the ZEIT Now API and gaining control over the ZEIT Now platform."
    title="ZEIT Now API Documentation"
  />
)
