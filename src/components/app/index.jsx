import { useState, useEffect } from "react";
import { CardList } from "../card-list";
import { Footer } from "../footer";
import { Header } from "../header";
// import { Sort } from "../sort";
import { Logo } from "../logo";
import { Search } from "../search";
import { dataCard } from "../../data";
import s from "./styles.module.css";
import { Button } from '../button';
import api from '../../utils/api';
import { useDebounce } from '../../hooks/useDebounce';
import { isLiked } from '../../utils/products';
import { CatalogPage } from '../../pages/catalog-page';
import { ProductPage } from '../../pages/product-page';
import FaqPage from '../../pages/faq-page';
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../not-found";
import { NotFoundPage } from "../../pages/not-found-page";
import { UserContext } from "../../contexts/current-user-context";
import { CardsContext } from "../../contexts/card-context";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { FavouritesPage } from "../../pages/favourite-page";
import { TABS_ID } from "../../utils/constants";
import RegisterForm from "../form/register-form";import Modal from "../modal";
;

export function App() {
  const [cards, setCards] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(themes.light);
  const [currentSort, setCurrentSort] = useState('');
  const [modalFormStatus, setModalFormStatus] = useState(true);

  // const [contacts, setContacts] = useState([]);
  const debounceSearchQuery = useDebounce(searchQuery, 300);

  const onCloseModalForm = () => {
    setModalFormStatus(false);
  }

  function handleRequest() {
    api.search(debounceSearchQuery)
      .then((dataSearch) => {
        setCards(dataSearch);
      })
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  function handleInputChange(dataInput) {
    setSearchQuery(dataInput);
  }

  function handleUpdateUser(dataUserUpdate) {
    api.setUserInfo(dataUserUpdate)
      .then((updateUserFromServer) => {
        setCurrentUser(updateUserFromServer)
      })
  }

  function handleProductLike(product) {
    const like = isLiked(product.likes, currentUser._id)
    return api.changeLikeProductStatus(product._id, like)
      .then((updateCard) => {
        const newProducts = cards.map(cardState => {
          return cardState._id === updateCard._id ? updateCard : cardState
        })
        setCards(newProducts);

        if(!like) {
          setFavourites(prevState => [...prevState,updateCard])
        } else {
          setFavourites(prevState => prevState.filter(card => card._id !== updateCard._id))
        }

        return updateCard;
      })
  }

  useEffect(() => {
    handleRequest();
  }, [debounceSearchQuery]);


  useEffect(() => {
    setIsLoading(true)
    api.getAllInfo()
      .then(([productsData, userInfoData]) => {
        setCurrentUser(userInfoData);
        setCards(productsData.products); 

        const favouriteProducts = productsData.products.filter(item => isLiked(item.likes, userInfoData._id))
        setFavourites(favouriteProducts)
      })
      .catch(err => console.log(err))
      .finally(() => { setIsLoading(false) })
  }, [])


  function sortedData(currentSort) {
    console.log(currentSort);

    switch (currentSort) {
      case (TABS_ID.CHEAP): setCards(cards.sort((a, b) => a.price - b.price)); break;
      case (TABS_ID.LOW): setCards(cards.sort((a, b) => b.price - a.price)); break;
      case (TABS_ID.DISCOUNT): setCards(cards.sort((a, b) => b.discount - a.discount)); break;
      default: setCards(cards.sort((a, b) => a.price - b.price));
    }

  }

  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <CardsContext.Provider value={{cards,favourites, handleLike: handleProductLike, isLoading, onSortData: sortedData, currentSort, setCurrentSort}}>
    <UserContext.Provider value={{currentUser,  onUpdateUser:handleUpdateUser}}>
    <Modal isOpen={modalFormStatus} onClose={onCloseModalForm}>
      <RegisterForm/>
    </Modal>
    <Header user={currentUser}>
        <Routes>
        <Route path="/" element={ 
        <>
          <Logo />       
          <Search
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
        </>
        }> 
      </Route>
      <Route path="*" element={<Logo href="/"/>}></Route>
      </Routes>
      </Header>

      <main className="content container" style={{backgroundColor: theme.background }}>
      <Routes>
        <Route path="/" element={<CatalogPage isLoading={isLoading} />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
        <Route path="/faq" element={<FaqPage />}></Route>
        <Route path="/product/:productID" element={<ProductPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      </main>
      <Footer />
    </UserContext.Provider>
    </CardsContext.Provider>
    </ThemeContext.Provider>
  );
}