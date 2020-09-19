import React from "react";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import styles from './index.module.css';
import client from '../../client';
import {gql, useQuery} from '@apollo/client';
import MagnifyingGlass from '../../Assets/Svg/MagnifyingGlass.svg';
import Close from '../../Assets/Svg/Close.svg';

// a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
    {
        countries {
            name
            code
            capital
            currency
            emoji
            languages {name}
            continent {name}
        }
    }
`;
interface CountryProps {
    "name": string,
    "code": string,
    "capital": string,
    "currency": string,
    "languages": Array<object>,
    "continent": object
}
function SearchComponent({...props}) {
    const [filteredCountries, setFilteredCountries] = React.useState<Array<CountryProps>>([]); //*** search filter updates countries */
    const [filter, setFilter] = React.useState<string>(""); //************************************** filter state for the query */
    const [limit, setLimit] = React.useState<Array<CountryProps>>([]); //****************************************************** limit query to first 10 results */
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client, variables: {limit:10}});
    const [isShow, setIsShowing] = React.useState<boolean>(false);
    const toggleClickHandler = () => {
        setIsShowing(!isShow);
    }
    React.useEffect(() => {
        if(data) {
            setLimit(data.countries.slice(0, 10));
        }
        console.log(isShow);
    }, [data, isShow]);
    function searchQuery() {
        const query = filter.toLowerCase();
        const matchedCountries = data.countries.filter((country:any) => {
            return (
                country.name.toLowerCase().includes(query)
            );
        });
        setFilteredCountries(matchedCountries);
    }
    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        searchQuery();
    }
    function changeHandler(value:string) {
        setFilter(value);
        searchQuery();
    }
    function handleClear(){
        setFilter("");
        setFilteredCountries([]);
    }
    return (
        <div className={styles.Search}>             
            {
                (loading || error) ?
                <p>{error ? error.message : 'Loading...'}</p> :
                <div>
                    <form onSubmit={handleSearch}>
                        <div className={styles.formControl} {...props}>
                            <input
                                placeholder="Provide country name"
                                type="text"
                                className={styles.formControlInput}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => changeHandler(event.target.value) }
                                value={filter} 
                            />
                            <img className={styles.iconSearch} src={MagnifyingGlass} alt={MagnifyingGlass} />
                            <span onClick={handleClear}><img className={styles.iconClose} src={Close} alt={Close} /></span>
                        </div>
                    </form>

                    <h3 className="mb0">All countries</h3>
                    <p className={styles.SearchCount}>
                        {
                            filteredCountries.length > 0 ? 
                            filteredCountries.length :
                            limit.length
                        }
                    /250</p>

                    <div className="row">
                        {
                            (filteredCountries.length > 0) ?
                            filteredCountries.map((content, index) => (
                                <Cards
                                    key={index}
                                    country={content}
                                    ClickHandler={toggleClickHandler}
                                />
                            )) 
                        :
                            limit.map((lim: any) => (
                                <Cards
                                    key={lim.code}
                                    country={lim}
                                    ClickHandler={toggleClickHandler}
                                />
                            ))
                        }
                    </div>
                </div>
           }
           {
               isShow &&
               <Modal
                    ClickHandler={toggleClickHandler}
               />
           }
        </div>
    );
}

export default SearchComponent;  