import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: true
  }


  render() {
    const { sprites, name, stats} = this.props.pokemon
    const {clicked} = this.state
    let hpVal = stats.find(pokemonStat => pokemonStat.name === "hp")
    
    return (
      <Card>
        <div>
          <div className="image"
            onClick={() => this.setState({ clicked: !clicked })} >
            <img src={clicked ? sprites.front : sprites.back} alt={name}
              
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />{ ` ${hpVal.value} hp`  }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
