// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
   state={search:"",}
   
   onChangeSearchInput=(event)=>{
    this.setState({searccInput:event.target.value})
   }
    
    render() {
        const {searchInput}=this.state
        const {destinationList}=this.props
        const searchResults=destinationList.filter(eachDestination=>
        eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()))
        return (
            <div className="app-container">
            <div className="destionation-search-contaainer">
            <h1 className="heading">Destination Search</h1>
            <div className="seaech-input-container">
            <input
             className="search-input" place-holder="search" type="search" onChange={this.onChangeSearchInput}/>
             <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search-icon" className="search-icon"/>
            </div>
            <ul className="destination-list">
            {searchResults.map((eachDestination)=>(
                <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}/>
                
            ))}
            </ul>
            </div>
            </div>
        )
    }
}

export default DestinationSearch