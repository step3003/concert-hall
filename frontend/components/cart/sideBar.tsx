const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className='side-bar__header'>
                <h4 className='side-bar__title'>Ваши билеты</h4>
                {/* <button */}
                {/*     className='side-bar__close-btn close-btn' */}
                {/*     aria-hidden='true' */}
                {/* > */}
                {/*     <span className='sr-only'> */}
                {/*         Закрыть окно с подтверждением оплаты */}
                {/*     </span> */}
                {/* </button> */}
            </div>
            <ul className='side-bar__seats'>
                {new Array(15).fill('1').map((path) => (
                    <li className='side-bar__seat' key={path}>
                        <p className='side-bar__seat-number'>Место 1</p>
                        <span className='side-bar__seat-price'>15 руб</span>
                        <button
                            className='side-bar__seat-remove close-btn'
                            aria-hidden='true'
                        >
                            <span className='sr-only'>
                                Удалить выбранный билет
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
            <div className='side-bar__footer'>
                <div className='side-bar__total-price'>
                    <p className='side-bar__footer-total'>Итого</p>
                    <p className='side-bar__footer-price'>30 руб</p>
                </div>
                <button className='side-bar__pay-btn btn'>Оплатить</button>
            </div>
        </div>
    );
};

export default SideBar;
