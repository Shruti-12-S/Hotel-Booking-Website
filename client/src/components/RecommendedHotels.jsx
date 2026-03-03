import React, {useEffect, useState} from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const RecommendedHotels = () => {

    const {rooms, searchCities} = useAppContext();
    const[recommended, setRecommended] = useState([]);

    // const filterHotels = ()=>{
    //     const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hotel.city));
    //     setRecommended(filteredHotels)
    // }

    const filterHotels = () => {
    if (!rooms || !searchCities) return;

    const filteredHotels = rooms
        .slice()
        .filter(room => searchCities.includes(room.hotel.city));

    setRecommended(filteredHotels);
};


    useEffect(()=>{
        filterHotels()
    },[rooms, searchCities])

    if (recommended.length === 0) return null;
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Recommended Hotels' 
        subTitle='Our recommendations include carefully selected hotels from popular destinations, offering great amenities, reliable service, and comfortable environments for business trips, family vacations, and solo adventures.'/>


        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {recommended.slice(0,4).map((room,index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>

    </div>
  )
  
}


// const RecommendedHotels = () => {
//     return <div>TEST COMPONENT</div>
// }

export default RecommendedHotels