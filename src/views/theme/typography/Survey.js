import React from 'react'
import { CCard, CCardHeader, CCardBody, CCardFooter } from '@coreui/react'
import { DocsLink } from 'src/components'

const Survey = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <button>Add Filter </button>
          <button className="float-end">Add Filter </button>
        </CCardHeader>
        <CCardBody>
          <h3 className="text-center">Survey Table</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Place</th>
                <th>Product</th>
                <th>SurveyID</th>
                <th>DataCount</th>
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

export default Survey
