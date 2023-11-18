'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import Loading from './Loading'
import Image from 'next/image'

export type CountrySelectValue = {
    name: string,
    flag: string,
    gdp: string,
}

interface CountrySelectProps{
    value: any,
    onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({
    value,
    onChange
}) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const imagesUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL

    const [isLoading, setIsLoading] = useState(true)
    const [countries, setCountries] = useState()

    useEffect(() => {
        axios.get(`${baseUrl}/get-countries`)
            .then(res=>{
                setCountries(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }, [baseUrl])
    if(isLoading)
        return (<Loading/>)
    return (
        <div
            className="
                flex
                justify-center
            "
        >
            <Select
                placeholder="Select a country"
                options={countries}
                isClearable
                value={value}
                onChange={(value: CountrySelectValue) => onChange(value as CountrySelectValue)}
                formatOptionLabel ={(option:any)=>(
                    <div className='flex flex-row items-center gap-3'>
                        <div>
                            <Image
                                className='w-9 h-6'
                                alt={option.name}
                                height="25"
                                width={25}
                                src={`${imagesUrl}/flags/${option.flag}`}
                            />
                        </div>
                        <div>
                            {option.name}
                        </div>
                    </div>
                )}
                getOptionValue={option=>option.name}
                classNames={{
                    control: () => 'p-3 border-2 w-96',
                    option: () => 'text-lg',
                    input: () => 'text-lg'
                }}
            />
        </div>
    );
}

export default CountrySelect;