import { useEffect, useState } from 'react';
import {CardList} from '../card-list';
import {Footer} from '../footer';
import {Header} from '../header';
// import { useState } from 'react';
import { Sort } from '../sort';
import s from './style.module.css';
import {dataCard} from '../../data';
import { Logo } from '../logo';
import { Search } from '../search';
import { Button } from '../button';

export function App() {
  const [cards, setCards] = useState(dataCard);
  const [searchQuery,setsearchQuery] = useState("");

  function handleRequest() {
    const filterCards = dataCard.filter(item => item.name.includes(searchQuery));
    setCards(filterCards); 
  }

  function handleFormSubmit(e){
    e.preventDefault();
    handleRequest()
  }
  
  function handleInputChange(dataInput){
    setsearchQuery(dataInput);
  }

  // useEffect(() => {
  //   handleRequest()
  // }, []);
  return (
    <>
      <Header>
        <Logo/>
        <Search 
          handleFormSubmit={handleFormSubmit} 
          handleInputChange={handleInputChange}
        />
      </Header>
      <main className='content container'> 
      {/* <Button htmlType='button' type='primary'>Купить</Button>
      <Button htmlType='button' type='secondary'>Отложить</Button> */}
      <Sort/>
      <CardList goods={cards}/>
      </main>
      <Footer/>
    </>
  );
  }
