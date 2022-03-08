import React from 'react'
import { CCard, CCardHeader, CCardBody, CCardFooter } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <button>Add Filter </button>
          <button className="float-end">Add Filter </button>
        </CCardHeader>
        <CCardBody>
          <h3 className="text-center">Emotion Table</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Angry</th>
                <th>Disgust</th>
                <th>Happy</th>
                <th>Neutral</th>
                <th>Surprise</th>
                <th>Timing</th>
                <th>Remove</th>``
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </CCardBody>
        <CCardFooter>
          <button>Download data </button>
          <button className="float-end">Clear all</button>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Typography
