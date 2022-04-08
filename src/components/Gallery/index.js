import './index.css'

const Gallery=props=>{
    const{imgDetails,imgClick}=props
    const{imageUrl,uniqueId}=imgDetails
    const buttonClick=()=>{
        imgClick(uniqueId)
    }
    return(
        <li className='li-container'>
            <button className='button-1'>
            <img src={imageUrl} onClick={buttonClick} className='image-1'/>
            </button>
        </li>
    )
}
export default Gallery