'use client';
import SecaoOQueFazemos from '../../../components/SecaoOQueFazemos/Desk'
import SetoresDesk from './Setores'

const OqueFazemosDesk = () => {
    return (
        <div className='oque-fazemos-desk'>
         <SecaoOQueFazemos Home={false}/>
         <SetoresDesk />
            
        </div>
    )
}

export default OqueFazemosDesk