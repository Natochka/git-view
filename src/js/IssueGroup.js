import React from 'react'
import { array } from 'prop-types'
import Issue from './Issue'

function IssueGroup({ data }) {
  return (
    <div className="issue-group">
      {data.map(item => (
        <Issue issue={item} />
      ))}
    </div>
  )
}

IssueGroup.propTypes = {
  data: array
}

export default IssueGroup
