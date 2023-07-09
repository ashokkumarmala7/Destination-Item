// Write your code here
import './index.css'

const DestinationItem=props=>{
    const{destinationDetails}=props
    const{imageUrl,name}=destinationDetails
    return(
        <li className="destination-item">
        <img src={imageUrl} alt={name} className="destionation-image"/>
        <p className="name">{name}</p>
        
        </li>
    )
}


export default DestinationItem