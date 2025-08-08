document.addEventListener('DOMContentLoaded', () => {
    console.log('당근마켓 클론 페이지가 로드되었습니다.');

    const popularKeywords = [
        "에어컨", "에어컨청소", "노트북", "원룸", "현대 중고차",
        "이사짐", "알바", "근처 맛집", "투표", "동네친구"
    ];

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

    
});