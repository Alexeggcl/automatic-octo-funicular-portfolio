"use client"

import { Fragment, useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Listbox, Transition } from '@headlessui/react'
import { RiExpandUpDownLine } from "react-icons/ri";

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const [selected, setSelected] = useState("en")

    useEffect(() => {
        i18n.changeLanguage(selected);
    }, [selected])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="text-[#ffd864] ml-3 block truncate">{selected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <RiExpandUpDownLine className="h-5 w-5 text-[#ffd864]" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-2 max-h-56 w-full overflow-auto rounded-md bg-[#ffd864]/10 py-1 text-base shadow-lg  sm:text-sm">
                                <Listbox.Option
                                    key='eng1'
                                    className='text-white relative cursor-default select-none py-2 pl-3 pr-9'
                                    value={'en'}
                                >
                                    <div className="flex items-center">
                                        <span
                                            className='font-normal ml-3 block truncate'
                                        >
                                            en
                                        </span>
                                    </div>
                                </Listbox.Option>
                                <Listbox.Option
                                    key='esp1'
                                    className='text-white relative cursor-default select-none py-2 pl-3 pr-9'
                                    value={'es'}
                                >
                                    <div className="flex items-center">
                                        <span
                                            className='font-normal ml-3 block truncate'
                                        >
                                            es
                                        </span>
                                    </div>
                                </Listbox.Option>
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default LanguageSwitcher;