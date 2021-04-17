import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <div className="filter">
      <div>
        <label>Filters:</label>
        <select className="filter-select">
          <option value="">Location</option>
        </select>
        <select className="filter-select">
          <option value="">Gender</option>
        </select>
        <select className="filter-select">
          <option value="">Age</option>
        </select>
        <select className="filter-select">
          <option value="">Status</option>
        </select>
      </div>
      <div>
        <label>From: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="filter-select"
        />
      </div>
      <div>
        <label>To: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="filter-select"
        />
      </div>
    </div>
  )
}

export default Filter
