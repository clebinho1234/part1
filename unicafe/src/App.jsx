import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.handleClick}> 
    {props.text} 
  </button>
)

const Title = ({ title }) => <h1>{title}</h1>

const StatisticsLine = (props) => {
  return(
    <tr>
      <td> {props.text} </td> 
      <td> {props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = () => {
    if (props.total == 0) return 0
    else return (props.good + props.bad * (-1)) / props.total
  }

  const positive = () => {
    if (props.total == 0) return 0
    else return props.good / props.total * 100
  }

    if (props.total == 0) return <p> No feedback given </p>
    else return(
      <table>
        <tbody>
          <StatisticsLine text = "good" value = {props.good} />
          <StatisticsLine text = "neutral" value = {props.neutral} />
          <StatisticsLine text = "bad" value = {props.bad} />
          <StatisticsLine text = "total" value = {props.total} />
          <StatisticsLine text = "average" value = {average()} />
          <StatisticsLine text = "positive" value = {positive() + " %"} />
        </tbody>
      </table>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    setTotal(total + 1)    
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Title title = "give feedback" />
      
      <Button handleClick = {() => incrementGood()} text = "good" />
      <Button handleClick = {() => incrementNeutral()} text = "neutral" />
      <Button handleClick = {() => incrementBad()} text = "bad" />
      
      <Title title = "statistics" />

      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} />
    </div>
  )
}

export default App