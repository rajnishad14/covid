import React, { useState } from 'react'
import FusionCharts from 'fusioncharts'
import charts from 'fusioncharts/fusioncharts.charts'
import ReactFusioncharts from 'react-fusioncharts'
import data from '../context/mockdata'

const allCategories = [...new Set(data.map((item) => item['Current Status']))]
const category = allCategories.map((item) => {
  return { label: `${item}` }
})
// Resolves charts dependancy
charts(FusionCharts)

const dataSource = {
  chart: {
    caption: 'Yearly Energy Production Rate',
    subcaption: ' Top 5 Developed Countries',
    numbersuffix: ' TWh',
    showsum: '1',
    plottooltext:
      '$label produces <b>$dataValue</b> of energy from $seriesName',
    theme: 'fusion',
    drawcrossline: '1',
  },
  categories: [
    {
      category: [
        {
          label: 'Canada',
        },
        {
          label: 'China',
        },
        {
          label: 'Russia',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'Coal',
      data: [
        {
          value: '400',
        },
        {
          value: '830',
        },
        {
          value: '500',
        },
      ],
    },
    {
      seriesname: 'Hydro',
      data: [
        {
          value: '350',
        },
        {
          value: '620',
        },
        {
          value: '410',
        },
      ],
    },
    {
      seriesname: 'Nuclear',
      data: [
        {
          value: '210',
        },
        {
          value: '400',
        },
        {
          value: '450',
        },
      ],
    },
    {
      seriesname: 'Gas',
      data: [
        {
          value: '180',
        },
        {
          value: '330',
        },
        {
          value: '230',
        },
      ],
    },
    {
      seriesname: 'Oil',
      data: [
        {
          value: '60',
        },
        {
          value: '200',
        },
        {
          value: '200',
        },
      ],
    },
  ],
}

const Chart = () => {
  const [pat, setPat] = useState(data)

  const [cat, setCat] = useState(allCategories)
  console.log(cat)

  return (
    <ReactFusioncharts
      type="stackedcolumn2d"
      width="100%"
      height="500px"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  )
}

export default Chart
