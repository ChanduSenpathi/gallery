import {Component} from 'react'
import Gallery from './/components/Gallery'
import './App.css';
const imagesList=[
  {
    uniqueId:1,
    imageUrl:"https://img.theweek.in/content/dam/week/leisure/society/images/2018/3/17/tom-and-jerry.jpg"
  },
  {
    uniqueId:2,
    imageUrl:"https://datastore02.rediff.com/h450-w670/thumb/61555E646A61586D635D6F6B60/4idm7ufttgn1oc7v.D.0.untitled.bmp"
  },
  {
    uniqueId:3,
    imageUrl:"https://c4.wallpaperflare.com/wallpaper/447/181/100/cartoons-wallpaper-thumb.jpg"
  },
  {
    uniqueId:4,
    imageUrl:"https://media-exp1.licdn.com/dms/image/C4E1BAQEGNewnWG9Bvw/company-background_10000/0/1633750265003?e=2147483647&v=beta&t=qbbOS8-QGp4-V4orttip5Ggw5TzX8vK_Ixe4QQxrRGQ"
  },
  {
    uniqueId:5,
    imageUrl:"https://wallpapercave.com/wp/wp3725750.jpg"
  },
  {
    uniqueId:6,
    imageUrl:"https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=465&quality=45&auto=format&fit=max&dpr=2&s=e77237d5d7a176cf8eb80bea053a8274"
  },
  {
    uniqueId:7,
    imageUrl:"https://i.pinimg.com/originals/0e/21/88/0e21887670e390b2193d824d203b435d.png"
  },
  {
    uniqueId:8,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkbWv_8hoHyDr0GfHH-vNlQR2qmkSotRzDXsD0vbjt19lpoJ4liyjm3vennnhtyX4KlY&usqp=CAU"
  },
  {
    uniqueId:9,
    imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-movies-in-order-index-1631199371.jpeg"
  },
]


class App extends Component{
  state={activeImg:imagesList[0].imageUrl}
  imageAccess=uniqueId=>{
    let newId=imagesList.filter(each=>(
      each.uniqueId===uniqueId
    ))
    let newImg=newId[0].imageUrl
    this.setState({activeImg:newImg})
  }
  render(){
    const{activeImg}=this.state
    return(
      <div>
        <div className='img-container'>
          <img src={activeImg} className="image-2" alt='image'/>
        </div>
        <h1>Cartoons Gallery</h1>
        <ul className='ul-container'>
          {imagesList.map(each=>(
            <Gallery key={each.uniqueId} imgDetails={each} imgClick={this.imageAccess}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
