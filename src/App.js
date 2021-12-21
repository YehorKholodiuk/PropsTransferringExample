import React from 'react';
import './App.css';
import MainMenu from "./MainMenu";
import QuestionAndAnswers from "./QuestionAndAnswers";
import Services from "./Services";
import Contacts from "./Contacts";

function App() {

  const companyName = 'Travel Agency';

  const mainMenu = ['Homepage', 'Services', 'Q&A', 'Contacts'];

  const services = [
    {place: 'Hawaii', hotel: 'Marriott', term: '8 days'},
    {place: 'Maldives', hotel: 'Four Season', term: '10 days'},
    {place: 'Orlando', hotel: 'Sheraton', term: '7 days'},
  ]

  const questionsAndAnswers = [
    {question: 'How to choose dates?', answer: 'See weather statistics.',},
    {question: 'What kind of activity we can choose?', answer: 'You can choose snorkeling, surfing or visiting Theme Parks.',},
  ]

  const contacts = {
    address: 'Los Angeles, Beverly Hills, 103',
    phoneNumber: '+7888777666',
    email: 'adventures@gmail.com'
  }

  return (
      <div className={'main'}>
        <h1>{companyName}</h1>
        <p>
          {mainMenu.map(el => <MainMenu menuItem={el}/>)}
        </p>
        <Services services={services}/>
        <QuestionAndAnswers questionsAndAnswers={questionsAndAnswers}/>
        <Contacts contacts={contacts}/>
      </div>
  );
}

export default App;