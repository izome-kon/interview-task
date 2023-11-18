'use client'
import Container from './components/Container'
import CountrySelect, { CountrySelectValue } from './components/CountrySelect'
import {useState} from 'react'

export default function Home() {
    const [gdp, setGdp] = useState<CountrySelectValue>()

    return (
        <Container>
            { gdp &&
                <div
                    className='
                        text-3xl
                        text-neutral-800
                        text-center
                        py-5
                        font-semibold
                    '
                >
                    {gdp.gdp}
                </div>
            }
            <CountrySelect
                value={gdp}
                onChange={(value:any) => {setGdp(value)}}
            />
        </Container>
    )
}
