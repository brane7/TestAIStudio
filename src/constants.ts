import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '가정용 망치 (중형)',
    description: '가정에서 다용도로 사용하기 좋은 튼튼한 스틸 망치입니다. 고무 그립으로 미끄러움을 방지했습니다.',
    price: 8000,
    category: '일반 공구',
    image: 'https://picsum.photos/seed/hammer/600/600',
    specs: ['재질: 탄소강', '무게: 450g', '특징: 미끄럼 방지 그립']
  },
  {
    id: '2',
    name: '다용도 드라이버 세트',
    description: '십자, 일자 등 다양한 규격의 비트가 포함된 정밀 드라이버 세트입니다.',
    price: 15000,
    category: '일반 공구',
    image: 'https://picsum.photos/seed/screwdriver/600/600',
    specs: ['구성: 12종 비트', '케이스 포함', '자석 팁']
  },
  {
    id: '3',
    name: 'LED 주방등 교체 시공',
    description: '어두운 주방을 밝게! 노후된 주방등을 고효율 LED 등으로 출장 교체해 드립니다.',
    price: 45000,
    category: '출장시공',
    image: 'https://picsum.photos/seed/led-light/600/600',
    specs: ['시공비 포함', 'LED 등기구 별도/포함 선택 가능', '시흥 전지역 출장']
  },
  {
    id: '4',
    name: '현관 도어락 설치 서비스',
    description: '디지털 도어락 신규 설치 및 노후 도어락 교체 시공 서비스입니다.',
    price: 60000,
    category: '출장시공',
    image: 'https://picsum.photos/seed/doorlock/600/600',
    specs: ['전문 기사 방문', '타공 및 설치 포함', '사용법 안내']
  },
  {
    id: '5',
    name: '강력 배수구 세정제',
    description: '막힌 배수구를 시원하게 뚫어주는 고농축 액체 세정제입니다.',
    price: 4500,
    category: '생활용품',
    image: 'https://picsum.photos/seed/cleaner/600/600',
    specs: ['용량: 1L', '용도: 싱크대, 화장실', '강력 살균']
  },
  {
    id: '6',
    name: '투명 실리콘 (다용도)',
    description: '창틀, 욕실 등 틈새 메꿈에 사용하는 고품질 투명 실리콘입니다.',
    price: 3500,
    category: '생활용품',
    image: 'https://picsum.photos/seed/silicone/600/600',
    specs: ['색상: 투명', '용량: 300ml', '곰팡이 방지']
  },
  {
    id: '7',
    name: '수전(수도꼭지) 교체 시공',
    description: '물 새는 수도꼭지, 낡은 수전을 새것으로 깔끔하게 교체해 드립니다.',
    price: 35000,
    category: '출장시공',
    image: 'https://picsum.photos/seed/faucet/600/600',
    specs: ['주방/욕실 선택', '누수 점검 포함', '시공 시간 약 30분']
  },
  {
    id: '8',
    name: '멀티탭 5구 (3m)',
    description: '과부하 차단 스위치가 장착된 안전한 5구 멀티탭입니다.',
    price: 12500,
    category: '생활용품',
    image: 'https://picsum.photos/seed/multitab/600/600',
    specs: ['길이: 3m', '안전 접지', '개별 스위치']
  }
];
