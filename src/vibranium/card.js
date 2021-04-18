import React from 'react'
import CountUp from 'react-countup'

function Card()
{
    return(
        <div class="ui statistics">
  <div class="statistic">
    <div class="value">
      <CountUp start={0} end={12173} duration={2.75} separator="," />
    </div>
    <div class="label">
      Faves
    </div>
  </div>
  <div class="statistic">
    <div class="value">
    <CountUp start={0} end={312000} duration={2.75} separator="," />
    </div>
    <div class="label">
      Views
    </div>
  </div>
  <div class="statistic">
    <div class="value">
    <CountUp start={0} end={122} duration={2.75} separator="," />
    </div>
    <div class="label">
      Members
    </div>
  </div>
</div>
    )
}
export default Card