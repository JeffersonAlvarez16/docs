import ApiDocs from '~/components/references-mdx/api/v1/index.mdx'
import ReferenceLayout from '~/components/layout/reference'

export default () => (
  <ReferenceLayout
    Data={<ApiDocs />}
    versioned
    description="A guide to the legacy ZEIT Now API."
    title="ZEIT Now 1.0 API Documentation"
  />
)
