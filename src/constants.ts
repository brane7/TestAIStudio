import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '황동 일자 손잡이',
    description: '세월이 흐를수록 깊어지는 황동의 질감을 느낄 수 있는 가구용 손잡이입니다.',
    price: 12000,
    category: '가구 부속',
    image: 'https://picsum.photos/seed/brass-handle/600/600',
    specs: ['재질: 황동', '길이: 120mm', '원산지: 대한민국']
  },
  {
    id: '2',
    name: '산업용 스틸 후크',
    description: '강력한 내구성을 자랑하는 벽면 고정용 스틸 후크입니다. 인더스트리얼 인테리어에 적합합니다.',
    price: 8500,
    category: '수납/정리',
    image: 'https://picsum.photos/seed/steel-hook/600/600',
    specs: ['재질: 강철', '내하중: 15kg', '마감: 분체도장']
  },
  {
    id: '3',
    name: '빈티지 도어 벨',
    description: '문이 열릴 때마다 맑은 소리를 내는 클래식한 디자인의 도어 벨입니다.',
    price: 24000,
    category: '인테리어 소품',
    image: 'https://picsum.photos/seed/door-bell/600/600',
    specs: ['재질: 주물', '소리: 맑은 고음', '설치: 자석/나사']
  },
  {
    id: '4',
    name: '무광 블랙 경첩 (2개입)',
    description: '부드러운 개폐감과 세련된 무광 마감이 특징인 고품질 경첩 세트입니다.',
    price: 6000,
    category: '가구 부속',
    image: 'https://picsum.photos/seed/hinge/600/600',
    specs: ['재질: 아연합금', '수량: 1세트(2개)', '색상: 매트 블랙']
  },
  {
    id: '5',
    name: '알루미늄 측정 자 (30cm)',
    description: '정밀한 측정이 가능한 전문가용 알루미늄 자입니다. 레이저 각인으로 눈금이 지워지지 않습니다.',
    price: 15000,
    category: '측정 도구',
    image: 'https://picsum.photos/seed/ruler/600/600',
    specs: ['재질: 알루미늄', '길이: 300mm', '특징: 미끄럼 방지']
  },
  {
    id: '6',
    name: '천연 가죽 공구 파우치',
    description: '작은 공구들을 안전하게 보관할 수 있는 튼튼한 천연 가죽 소재의 파우치입니다.',
    price: 38000,
    category: '수납/정리',
    image: 'https://picsum.photos/seed/pouch/600/600',
    specs: ['재질: 소가죽', '크기: 200x150mm', '수작업 제작']
  },
  {
    id: '7',
    name: '구리 소재 S자 고리',
    description: '주방이나 욕실에서 다용도로 활용 가능한 구리 소재의 S자 고리입니다.',
    price: 4500,
    category: '수납/정리',
    image: 'https://picsum.photos/seed/copper-s-hook/600/600',
    specs: ['재질: 구리', '길이: 80mm', '항균 효과']
  },
  {
    id: '8',
    name: '무쇠 주물 문고리',
    description: '묵직한 무게감과 거친 질감이 매력적인 전통 방식의 무쇠 주물 문고리입니다.',
    price: 29000,
    category: '가구 부속',
    image: 'https://picsum.photos/seed/iron-knob/600/600',
    specs: ['재질: 무쇠 주물', '지름: 65mm', '전통 공법']
  }
];
