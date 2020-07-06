import React from 'react';
import './Chart.css'

function BarGroup(props) {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 5
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
  }
  
  class BarChart extends React.Component {
    state = {
      data: [
        { name: 'Python...nnnn', value: 80 },
        { name: 'mySQL..............', value: 85 },
        { name: 'Javascript....................', value: 80 },
        { name: 'CSS......', value: 90 },
        { name: 'HTML...........', value: 95 },
        { name: 'React..........', value: 70 },
        { name: 'Bootstap..................', value: 85 }
      ]
    }
  
    render() {
      let barHeight = 30
          
      let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="800" height="300" >
        <g className="container">
          <g className="chart" transform="translate(80,40)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
  
  

export default BarChart;