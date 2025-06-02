'use client';

import SecaoNossosClientesDesk from "./SecaoNossosClientesDesk"

const NossosClientesDesk = ({ Home }: { Home: boolean }) => {
    return (
        <SecaoNossosClientesDesk Home={Home} />
    )
}

export default NossosClientesDesk