import React from 'react'
import { useAmp } from 'next/amp'
import { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/tag'

import Head from '~/components/layout/head'
import Main from '~/components/layout/main'
import Heading from '~/components/text/linked-heading'
import Content from '~/components/layout/content'
import ContentFooter from '~/components/layout/content-footer'
import components from '~/lib/mdx-components'
import { H1 } from '~/components/text'
import HR from '~/components/text/hr'
import { FooterFeedback } from '~/components/feedback-input'

const DocH1 = ({ children }) => (
  <>
    <Heading noAnchor lean offsetTop={175}>
      <H1>{children}</H1>
    </Heading>
    <style jsx>{`
      :global(h1) {
        margin: 0;
      }
    `}</style>
  </>
)

const NonAmpOnly = ({ children }) => (useAmp() ? null : children)

class withStandard extends React.Component {
  render() {
    const {
      meta = {
        title: 'ZEIT Now Documentation',
        description:
          'The knowledge base and documentation for how to use ZEIT Now and how it works.'
      }
    } = this.props

    return (
      <MDXProvider components={components}>
        <>
          <Head
            titlePrefix=""
            titleSuffix=" - ZEIT Documentation"
            title={`${meta.title}`}
            description={meta.description}
            image={meta.image}
            lastEdited={meta.lastEdited}
          >
            {meta.editUrl.includes('/docs/error/') && (
              <meta name="robots" content="noindex" />
            )}
          </Head>

          <Content center small>
            <div className="heading content-heading">
              <DocH1>{meta.title}</DocH1>
            </div>

            <div className="content">{this.props.children}</div>

            <NonAmpOnly>
              <>
                <HR />
                <FooterFeedback />
              </>
            </NonAmpOnly>

            <ContentFooter
              lastEdited={meta.lastEdited}
              editUrl={meta.editUrl}
            />
          </Content>
        </>
      </MDXProvider>
    )
  }
}

export default withRouter(withStandard)
