import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Container from "./Container"
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '#', type: "link", current: true },
    { name: 'About', href: '#', type: "link", current: false },
    { name: 'Support', href: '#', type: "button", current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="py-6 px-5 bg-white">
            {({ open }) => (
                <>
                    <Container withPadding={false}>
                        <div className="relative flex items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-between sm:items-stretch">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href="" className="text-xl text-black font-bold">
                                        My
                                        <span className="text-green-500">Quran</span>
                                    </a>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-green-500' : 'text-gray-800 hover:text-green-500', item.type === "button" && 'bg-green-500 text-white hover:text-white',
                                                    'px-3 py-2 rounded-md text-md font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-5 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-green-500 bg-green-100' : 'text-gray-800 hover:bg-green-100 hover:text-green-500',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}