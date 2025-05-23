'use client';
import SecaoOQueFazemos from '../../../components/SecaoOQueFazemos/Mobile';
import Setores from './Setores/index';

const OqueFazemosMobile = () => {
    return (
        <div className='oque-fazemos-mobile'>
            <SecaoOQueFazemos Home={false} />
            <Setores />

        </div>
    )
}

export default OqueFazemosMobile