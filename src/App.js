import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://scontent.fbog11-1.fna.fbcdn.net/v/t1.6435-9/96940421_966925060410302_573835801436094464_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=cDfRb1SLMXIAX-Bmlln&_nc_oc=AQkjNqjFuJ9ZEwK6rOmNWxk4Y09lWrCSXitAVpQVYmlCkpHjPp6LojEwYc5KED3IQC0&_nc_ht=scontent.fbog11-1.fna&oh=00_AT8DUD8pMCMRCTxBjY74APHardTZyD8U0AyljP1t_TwkCw&oe=62B553F2',
      name: 'Eilyn Dayhanna Buitrago Duque',
      profession: 'Ingeniería en Sistemas Y Telecomunicaciones',
      bio: '❤ backend developer - Me considero una presona que tiene un excelente manejo al momento de trabajar en equipo, soy puntual, soy honesta, genero confianza, tengo sentido de responsabilidad, conocimientos informáticos, excelente presentación personal, conocimiento y respeto de las normas, capacidad de actualizar los conocimientos.',
      address: 'Manizales, Caldas Colombia',
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/eilyn.buitrago'},
        {name: 'twitter', url: 'https://twitter.com/home'},
        {name: 'github', url: 'https://github.com/EilynBuitrago'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/eilyn-dayhanna-buitrago-duque-01b3b2181/'}
      ],
      experience: [
        {jobTitle: 'Asesor Comercial', company: 'UNO27', startDate: 'Noviembre 2021', endDate: 'Febrero 2022', jobDescription: 'Adquiri experiencia durante 3 meses en el Cargo Asesor comercial en Retención de 2 anillo para la compañia Claro.'},
        {jobTitle: 'Asistente Administrativa', company: 'INSTITUCIÓN EDUCATIVA FILADELFIA', startDate: 'Junio 2018', endDate: 'Diciembre 2018', jobDescription: 'Durante 6 meses realice la practica de Asistente administrativa. '},
      ],
      education: [
        {degree: 'Bachiller Academico', institution: 'INSTITUCIÓN EDUCTATIVA FILADELFIA', startDate: 'Enero 2011', endDate: 'Diciembre 2018', description: 'Realice mi bachillerato en la Institución Educativa Filadelfia, en el municipio de Filadelfia Caldas.'},
        {degree: 'Asistencia Administrativa', institution: 'SENA', startDate: 'Enero 2017', endDate: 'Enero 2018', description: 'Realice el tecnico en Asistencia Administrativa durante 2 años consecutivos, en el instituto SENA'},
        {degree: 'Ingeniería en Sistemas y Telecomunicaciones', institution: 'UNIVERISDAD DE MANIZALES', startDate: 'Enero 2020', endDate: 'Presente', description: 'Desde el 2020 empece a estudiar el pregrado de Ingenieria en sistemas y Telecomunicaciones en la Universidad de Manizales, en la actualidad me encuentro cursando el 5 semestre.'},
      ],
      certificate: [
        {name: 'Ingles', institution: 'Colombo', startDate: 'Enero 2019', endDate: 'Diciembre 2019', description: 'Estudie Ingles durante un año, en el cual abquiri un nivel de B2' },
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'},
        {name: 'C#', percentage: '40%'},
        {name: 'Java', percentage: '80%'}
        
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
