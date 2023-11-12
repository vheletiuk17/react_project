import React, {FC, useState} from 'react';

import css from './SearchForm.module.css'


type IProps = {
    onSubmit: CallableFunction
}

const SearchForm: FC<IProps> = ({onSubmit}) => {
    const [query, setQuery] = useState<string>('')


    return (
        <form className={css.searchForm} onSubmit={(e) => onSubmit(e)}>
            <input className={css.PoleSearch} name='search' type="Text" placeholder={'Type your query to search'}
                   value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className={css.searchButton}>Search</button>
        </form>
    );
};

export {SearchForm};