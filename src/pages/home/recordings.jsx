import useSound from 'use-sound';
import aa_aa_aah from './../../assets/recordings/aa_aa_aah.mp3';
import ah_ah_aaay from './../../assets/recordings/ah_ah_aaay.mp3';
import ah_jijo from './../../assets/recordings/ah_jijo.mp3';
import amazing from './../../assets/recordings/amazing.mp3';
import callate_pues from './../../assets/recordings/callate_pues.mp3';
import estas_bien_cabron from './../../assets/recordings/estas_bien_cabron.mp3';
import fausto1 from './../../assets/recordings/fausto1.mp3';
import fausto2 from './../../assets/recordings/fausto2.mp3';
import igh from './../../assets/recordings/igh.mp3';
import le_encanta from './../../assets/recordings/le_encanta.mp3';
import llego_el_pan from './../../assets/recordings/llego_el_pan.mp3';
import mato from './../../assets/recordings/mato.mp3';
import queee from './../../assets/recordings/queee.mp3';
import que_onda_pa from './../../assets/recordings/que_onda_pa.mp3';
import que_pendejo from './../../assets/recordings/que_pendejo.mp3';
import que_raro from './../../assets/recordings/que_raro.mp3';
import sigues from './../../assets/recordings/sigues.mp3';
import sigues_y_no_te_cansas from './../../assets/recordings/sigues_y_no_te_cansas.mp3';

export const recordings = [
    {
        name: 'Aa..aa..aah',
        play: () => {
            const [play] = useSound(aa_aa_aah);
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #514a9d, #24c6dc)'
        }
    },
    {
        name: '¡Ah ah aaay!',
        play: () => {
            const [play] = useSound(ah_ah_aaay);
            return play;
        },
        style: {
            background: 'linear-gradient(135deg, #0fd850 0%, #c4f947 100%)'
        }
    },
    {
        name: '¡Ah jijo!',
        play: () => {
            const [play] = useSound(ah_jijo);
            return play;
        },
        style: {
            background: 'linear-gradient(-225deg, #b6cee8 0%, #f578dc 100%)'
        }
    },
    {
        name: 'Amazing',
        play: () => {
            const [play] = useSound(amazing);
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #7f00ff, #f07fff)'
        }
    },
    {
        name: 'Cállate pues',
        play: () => {
            const [play] = useSound(callate_pues);
            return play;
        },
        style: {
            background: 'linear-gradient(-60deg, #ff8008, #ffc837)'
        }
    },
    {
        name: 'Estás bien cabrón',
        play: () => {
            const [play] = useSound(estas_bien_cabron);
            return play;
        },
        style: {
            background: 'linear-gradient(210deg, #bc4e9c, #f80759)'
        }
    },
    {
        name: 'Fausto',
        play: () => {
            const [play] = useSound(fausto1);
            return play;
        },
        style: {
            background: 'linear-gradient(245deg, #4f75fe 0%, #00f2fe 100%)'
        }
    },
    {
        name: '¡Fausto!',
        play: () => {
            const [play] = useSound(fausto2);
            return play;
        },
        style: {
            background: 'linear-gradient(60deg, #11998e, #38ef7d)'
        }
    },
    {
        name: 'Igh',
        play: () => {
            const [play] = useSound(igh);
            return play;
        },
        style: {
            background: 'linear-gradient(to right, #b24592, #f15f79)'
        }
    },
    {
        name: 'Le encanta',
        play: () => {
            const [play] = useSound(le_encanta);
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #f09819, #edde5d)'
        }
    },
    {
        name: '¡Llegó el pan!',
        play: () => {
            const [play] = useSound(llego_el_pan);
            return play;
        },
        style: {
            background: 'linear-gradient(270deg, #8c98cf 0%, #764ba2 100%)'
        }
    },
    {
        name: 'Mato',
        play: () => {
            const [play] = useSound(mato);
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #16a085 0%, #f4d03f 100%)'
        }
    },
    {
        name: '¿Queeé?',
        play: () => {
            const [play] = useSound(queee);
            return play;
        },
        style: {
            background: 'linear-gradient(15deg, #f12711, #f5af19)'
        }
    },
    {
        name: '¿Qué onda pa?',
        play: () => {
            const [play] = useSound(que_onda_pa);
            return play;
        },
        style: {
            background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
        }
    },
    {
        name: '¡Que pendejo!',
        play: () => {
            const [play] = useSound(que_pendejo);
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #00bf68, #94cefd)'
        }
    },
    {
        name: 'Que raro',
        play: () => {
            const [play] = useSound(que_raro);
            return play;
        },
        style: {
            background: 'linear-gradient(222deg, #7cc8f7, #5e6aff)'
        }
    },
    {
        name: '¿Sigues?',
        play: () => {
            const [play] = useSound(sigues);
            return play;
        },
        style: {
            background: 'linear-gradient(45deg, #ad5399, #cc8eff)'
        }
    },
    {
        name: '¿Sigues y no te cansas?',
        play: () => {
            const [play] = useSound(sigues_y_no_te_cansas);
            return play;
        },
        style: {
            background: 'linear-gradient(60deg, #ffde32, #ffa451)'
        }
    }
];