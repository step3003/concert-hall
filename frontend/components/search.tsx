import SearchIcon from '../public/icons/search.svg';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setIsSearch } from '../features/common/commonSlice';
import cn from 'classnames';

const Search = () => {
    const { isSearch } = useAppSelector((state) => state.common);
    const dispatch = useAppDispatch();

    function handleCloseBtn() {
        dispatch(setIsSearch(false));
    }

    return (
        <div className={cn('search', { 'search--active': isSearch })}>
            <form className='search__form'>
                <div className='search__field'>
                    <label htmlFor='search' hidden>
                        Поиск
                    </label>
                    <SearchIcon />
                    <input className='search__input' id='search' />
                </div>
            </form>
            <button
                className='search__close-btn close-btn'
                aria-hidden='true'
                onClick={handleCloseBtn}
            >
                <span className='sr-only'>Закрыть поиск</span>
            </button>
        </div>
    );
};

export default Search;
