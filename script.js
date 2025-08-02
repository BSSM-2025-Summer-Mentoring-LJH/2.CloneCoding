document.addEventListener('DOMContentLoaded', () => {
    console.log('당근마켓 클론 페이지가 로드되었습니다.');

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        const searchInput = document.querySelector('.search-input');
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`"${searchTerm}"(으)로 검색합니다.`);
        } else {
            alert('검색어를 입력해주세요.');
        }
    });

    const neighborhoodButtons = document.querySelectorAll('.neighborhood-button');
    neighborhoodButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const neighborhoodName = event.target.textContent;
            alert(`${neighborhoodName} 동네를 선택했습니다.`);
        });
    });

    const popularSearchButtons = document.querySelectorAll('.popular-search-button');
    popularSearchButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const keyword = event.target.textContent;
            alert(`인기 검색어 "${keyword}"를 클릭했습니다.`);
        });
    });

    const categoryButtons = document.querySelectorAll('.category-item-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const categoryName = button.querySelector('p').textContent;
            alert(`${categoryName} 카테고리를 선택했습니다.`);
        });
    });

    const logoButton = document.querySelector('.logo-button');
    logoButton.addEventListener('click', () => {
        alert('메인 페이지로 이동합니다.');
    });

    const locationDropdownButton = document.querySelector('.location-dropdown-button');
    locationDropdownButton.addEventListener('click', () => {
        alert('위치 설정 메뉴가 열립니다.');
    });

    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', () => {
        alert('앱 다운로드 페이지로 이동합니다.');
    });
});