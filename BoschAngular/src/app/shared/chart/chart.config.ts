export const gaugeType = {
  semi: 'semi',
  full: 'full',
  arch: 'arch',
};

export const GAUGE_CHART_CONFIG = {
  type: gaugeType.semi,
  thick: '25',
  append: '%',
  cap: 'butt',
  size: '200',
};

export const DoughNutData = [
  {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [89, 11],
          backgroundColor: ['rgba(238,144,44)', '#CBECFF'],
          borderColor: ['rgba(255, 255, 255 ,1)'],
          borderWidth: 0.1,
        },
      ],
    },
    options: {
      rotation: 270,
      circumference: 180,
      cutout: '85%',
    },
    color: 'rgba(238,144,44)',
    value: '89',
    text: 'OAE',
  },
  {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['#53B6AF', '#CBECFF'],
          borderColor: ['rgba(255, 255, 255 ,1)'],
          borderWidth: 0.1,
        },
      ],
    },
    options: {
      rotation: 270,
      circumference: 180,
      cutout: '85%',
    },
    color: '#53B6AF',
    value: '85',
    text: 'Availability',
  },
  {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ['rgba(152,117,255)', '#CBECFF'],
          borderColor: ['rgba(255, 255, 255 ,1)'],
          borderWidth: 0.1,
        },
      ],
    },
    options: {
      rotation: 270,
      circumference: 180,
      cutout: '85%',
    },
    color: 'rgba(152,117,255)',
    value: '70',
    text: 'Performance',
  },
  {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [90, 10],
          backgroundColor: ['#B8D900', '#CBECFF'],
          borderColor: ['rgba(255, 255, 255 ,1)'],
          borderWidth: 0.1,
        },
      ],
    },
    options: {
      rotation: 270,
      circumference: 180,
      cutout: '85%',
    },
    color: '#B8D900',
    value: '90',
    text: 'Quality',
  },
];
