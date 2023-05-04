import { useContext, useEffect, useState } from 'react';
import { CardList } from '../../components/card-list'
import Product from '../../components/product';
import { Sort } from '../../components/sort'
import { Spinner } from '../../components/spinner';
import api from '../../utils/api';
import { isLiked } from '../../utils/products';
import { useParams } from 'react-router-dom';
import { NotFound } from '../../components/not-found';
import { CardsContext } from '../../components/contexts/card-context';


export const ProductPage = () => {
    const {productID} = useParams();

    const [product, setProduct] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorState, setErrorState] = useState(false);
    const {handleLike} = useContext(CardsContext);
    
    function handleProductLike(product) {
        handleLike(product)
            .then(updateCard => {
                setProduct(updateCard)
            });
    }

    useEffect(() => {
        setIsLoading(true);
        api.getInfoProduct(productID)
            .then(([productData, userData]) => {
                setCurrentUser(userData);
                setProduct(productData);
            })
            .catch((err) => {
                setErrorState(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])
    return (
        <>
            {isLoading
                ? <Spinner />
                : !errorState && <Product {...product} currentUser={currentUser} onProductLike={handleProductLike} />
            }

            {!isLoading && errorState && <NotFound title="Товар не найден" />
            }
        </>
    )
}