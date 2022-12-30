import useSound from 'use-sound';

export const recordings = [
    {
        name: 'Aa..aa..aah',
        play: () => {
            const [play] = useSound('../../assets/recordings/aa_aa_aah.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #514a9d, #24c6dc)'
        }
    },
    {
        name: '¡Ah ah aaay!',
        play: () => {
            const [play] = useSound('../../assets/recordings/ah_ah_aaay.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(135deg, #0fd850 0%, #c4f947 100%)'
        }
    },
    {
        name: '¡Ah jijo!',
        play: () => {
            const [play] = useSound('../../assets/recordings/ah_jijo.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(-225deg, #b6cee8 0%, #f578dc 100%)'
        }
    },
    {
        name: 'Amazing',
        play: () => {
            const [play] = useSound('../../assets/recordings/amazing.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #7f00ff, #f07fff)'
        }
    },
    {
        name: 'Cállate pues',
        play: () => {
            const [play] = useSound('../../assets/recordings/callate_pues.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(-60deg, #ff8008, #ffc837)'
        }
    },
    {
        name: 'Estás bien cabrón',
        play: () => {
            const [play] = useSound('../../assets/recordings/estas_bien_cabron.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(210deg, #bc4e9c, #f80759)'
        }
    },
    {
        name: 'Fausto',
        play: () => {
            const [play] = useSound('../../assets/recordings/fausto1.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(245deg, #4f75fe 0%, #00f2fe 100%)'
        }
    },
    {
        name: '¡Fausto!',
        play: () => {
            const [play] = useSound('../../assets/recordings/fausto2.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(60deg, #11998e, #38ef7d)'
        }
    },
    {
        name: 'Igh',
        play: () => {
            const [play] = useSound('../../assets/recordings/igh.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(to right, #b24592, #f15f79)'
        }
    },
    {
        name: 'Le encanta',
        play: () => {
            const [play] = useSound('../../assets/recordings/le_encanta.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #f09819, #edde5d)'
        }
    },
    {
        name: '¡Llegó el pan!',
        play: () => {
            const [play] = useSound('../../assets/recordings/llego_el_pan.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(270deg, #8c98cf 0%, #764ba2 100%)'
        }
    },
    {
        name: 'Mato',
        play: () => {
            const [play] = useSound('../../assets/recordings/mato.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #16a085 0%, #f4d03f 100%)'
        }
    },
    {
        name: '¿Queeé?',
        play: () => {
            const [play] = useSound('../../assets/recordings/queee.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(15deg, #f12711, #f5af19)'
        }
    },
    {
        name: '¿Qué onda pa?',
        play: () => {
            const [play] = useSound('../../assets/recordings/que_onda_pa.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
        }
    },
    {
        name: '¡Que pendejo!',
        play: () => {
            const [play] = useSound('../../assets/recordings/que_pendejo.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #00bf68, #94cefd)'
        }
    },
    {
        name: 'Que raro',
        play: () => {
            const [play] = useSound('../../assets/recordings/que_raro.mp3');
            return play;
        },
        style: {
            background: 'linear-gradient(to right, #ff9966, #ff5e62)'
        }
    }
];