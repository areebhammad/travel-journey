import img1 from '../assets/img1.svg'
import location from '../assets/location.svg'

 
export default function Card(props) {
  return (
  <div className='card-main'>
    <div className='card'> 
      <img src={props.data.coverImg} alt="img1" className='card--img'/>
        <div className='card--right'>
          <div className='card--first-line'>
            <img src={location} alt="location--icon" className='location--icon'/>
            <p className='card--location'>{props.data.location}</p>
            <a href={props.data.locationLink} className='card--link'>View on Google map</a>
          </div>
          <h1 className='card--name'>{props.data.name}</h1>
          <p className='card--date'>{props.data.date}</p>
          <p className='card--description'>{props.data.description}</p>
        </div>
    </div>
  </div>
  )
}

// return (
//   <div className='card-main'>
//     <div className='card'> 
//       <img src="https://source.unsplash.com/WLxQvbMyfas" alt="img1" className='card--img'/>
//         <div className='card--right'>
//           <div className='card--first-line'>
//             <img src={location} alt="location--icon" className='location--icon'/>
//             <p className='card--location'>JAPAN</p>
//             <a href="https://goo.gl/maps/yXxwRq4QngFpu1rcA" className='card--link'>View on Google map</a>
//           </div>
//           <h1 className='card--name'>Mount Fuji</h1>
//           <p className='card--date'>12 Jan, 2021 - 24 Jan, 2021</p>
//           <p className='card--description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
//         </div>
//     </div>
//   </div>
//   )