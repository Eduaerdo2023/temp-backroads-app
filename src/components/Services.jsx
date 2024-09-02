import React from 'react'
import Title from './Title';
import ServicesShown from './ServicesShown';

const Services = () => {
  const servicios = [
    {
      id: 1,
      icon: "fas fa-wallet fa-fw",
      title: "saving money",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
      id:2,
      icon: "fas fa-tree fa-fw",
      title: "endless hiking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    { 
      id:3,
      icon:"fas fa-socks fa-fw", 
      title:"amazing Comfort", 
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    }
  ];
  return (
    <section className="section services" id="services">
      <Title title="our" titleSpan="services" />
      <div className="section-center services-center">
        {servicios.map(servicio=> {
          return (
            <ServicesShown 
            {...servicio} key={servicio.id}
            />
          )
        })}
      </div>
    </section>
  );
}

export default Services
