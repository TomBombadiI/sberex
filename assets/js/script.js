const burgerBtns = document.querySelectorAll('.burger-open');
const navMenu = document.querySelector('.nav-menu');

burgerBtns.forEach(burgerBtn => {
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('.burger-open')) {
        navMenu.classList.remove('active');
    }
})

const selects = document.querySelectorAll('.select');

selects.forEach(select => {
    const selectList = select.querySelector('.select-list');
    const activeOption = select.querySelector('.option');
    const options = selectList.querySelectorAll('.option');
    const arrowDropdown = activeOption.querySelector('.arrow-dropdown');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const tmp = activeOption.cloneNode(true);
            tmp.querySelector('.arrow-dropdown').remove();

            activeOption.innerHTML = option.innerHTML;
            activeOption.classList = option.classList;
            activeOption.insertAdjacentElement('beforeend', arrowDropdown);
            option.innerHTML = tmp.innerHTML;
            option.classList = tmp.classList;
        });
    });

    select.addEventListener('click', () => {
        if (selectList.style.height === '0px' || !selectList.style.height) {
            selectList.style.height = selectList.scrollHeight + 15 + 'px';
            selectList.style.zIndex = '20';
            select.style.overflow = 'visible';
            select.querySelector('.option').style.zIndex = '21';
            selectList.classList.remove('active');
        } else {
            selectList.classList.add('active');
            selectList.style.height = '0';
            selectList.style.zIndex = '5';
            setTimeout(() => {
                select.style.overflow = 'hidden';
                select.querySelector('.option').style.zIndex = '6';
            }, 300);
        }
    });

});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.select')) {
        selects.forEach(select => {
            const selectList = select.querySelector('.select-list');

            selectList.style.height = '0';
            selectList.style.zIndex = '5';
        })
    } else {
        selects.forEach(select => {
            if (select != event.target.closest('.select')) {
                const selectList = select.querySelector('.select-list');

                selectList.style.height = '0';
                selectList.style.zIndex = '5';
            }
        })
    }
});

const currencyWrapper = document.querySelector('.currency__wrapper');
const currencyMore = document.querySelector('.currency-more');

currencyMore.addEventListener('click', () => {
    if (currencyWrapper.classList.contains('active')) {
        currencyWrapper.classList.remove('active');
        currencyWrapper.style.height = '360px';
    } else {
        currencyWrapper.classList.add('active');
        currencyWrapper.style.height = currencyWrapper.scrollHeight + 46 + 'px';
    }
});