


// Import your event images
import event1 from '../assets/eventpics/event1.jpg';
import event2 from '../assets/eventpics/event2.jpg';
import event3 from '../assets/eventpics/event3.jpg';
import event4 from '../assets/eventpics/event4.jpg';



const Events = () => {
  return (  
    <>
      <h1 className="p-10 text-center text-[55px] text-black font-dm">
    Events
   </h1>
     
{/* 
      // {/* Banner */}
      {/* <div className="w-full">
      //   <img
          src={banner}
          alt="Event Banner"
          className="w-full h-auto object-cover"
        />
     </div>  */}

      {/* Image Grid */}
      <div className="bg-[#f8f9fa] py-10 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <img src={event1} alt="event1" className="rounded-lg shadow-md max-h-96" />
          <img src={event2} alt="event2" className="rounded-lg shadow-md max-h-96" />
          <img src={event3} alt="event3" className="rounded-lg shadow-md max-h-96" />
          <img src={event4} alt="event4" className="rounded-lg shadow-md max-h-96" />
     
        </div>
      </div>

      
    </>
  );
};

export default Events;