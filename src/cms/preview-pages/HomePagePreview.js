import React from 'react'
import HomePagePreviewTemplate from '../preview-templates/HomePagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const HomePagePreview = ({ entry, getAsset, widgetsFor }) => {
  return (
    <PreviewLayout>
      <HomePagePreviewTemplate
        title={entry.getIn(['data', 'title'])}
        subheading={entry.getIn(['data', 'subheading'])}
        image={{
          image: getAsset(entry.getIn(['data', 'image', 'image'])),
          alt: entry.getIn(['data', 'image', 'alt']),
        }}
        firstSection={{
          heading: entry.getIn(['data', 'firstSection', 'heading']),
          column1: entry.getIn(['data', 'firstSection', 'column1']),
          column2: entry.getIn(['data', 'firstSection', 'column2']),
        }}
        partners={widgetsFor('partner').map(partner => ({
          image: getAsset(partner.getIn(['data', 'image'])),
          alt: partner.getIn(['data', 'alt']),
        }))}
        secondSection={{
          heading: entry.getIn(['data', 'secondSection', 'heading']),
          column1: entry.getIn(['data', 'secondSection', 'column1']),
          image: {
            image: getAsset(
              entry.getIn(['data', 'secondSection', 'image', 'image'])
            ),
            alt: entry.getIn(['data', 'secondSection', 'image', 'alt']),
            text: entry.getIn(['data', 'secondSection', 'image', 'text']),
          },
        }}
      />
    </PreviewLayout>
  )
}

export default HomePagePreview

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}
