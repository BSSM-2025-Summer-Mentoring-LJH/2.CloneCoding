document.addEventListener('DOMContentLoaded', () => {
    console.log('당근마켓 클론 페이지가 로드되었습니다.');

    const popularKeywords = [
        "에어컨", "에어컨청소", "노트북", "원룸", "현대 중고차",
        "이사짐", "알바", "근처 맛집", "투표", "동네친구"
    ];

    const categories = [
        { name: "중고거래", icon: "assets/중고거래.png" },
        { name: "알바", icon: "assets/알바.png" },
        { name: "부동산", icon: "assets/부동산.png" },
        { name: "중고차", icon: "assets/중고차.png" },
        { name: "동네업체", icon: "assets/동네업체.png" },
        { name: "동네생활", icon: "assets/동네생활.png" },
        { name: "모임", icon: "assets/모임.png" }
    ];

    const neighbors = [
        "송도동", "역상동", "물금읍", "봉담읍", "배방읍", "서초동", "옥정동", "신림동",
        "불당동", "향남읍", "청담동", "다산동", "별내동", "화도읍", "다사읍", "마곡동", 
        "압구정동", "배곧동", "고덕동", "오창읍"
    ]

    const listContainer = document.querySelector('.popular-search-list');
    popularKeywords.forEach(keyword => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'popular-search-button';
        button.textContent = keyword;

        button.addEventListener('click', () => {
            alert(`인기 검색어 "${keyword}"를 클릭했습니다.`);
        });

        li.appendChild(button);
        listContainer.appendChild(li);
    });

    const section = document.querySelector(".category-and-neighborhood");

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


