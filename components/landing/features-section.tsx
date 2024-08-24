/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable style/indent */
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GitHubLogoIcon,
    GlobeIcon,
    InputIcon,
} from '@radix-ui/react-icons'
import { BentoCard, BentoGrid } from '~/components/ui/bento-grid'
import { AnimatedBeamMultipleInputDemo } from '~/components/landing/magic-cards'
import { OrbitingCirclesDemo } from '~/components/landing/orbitingcircles'

const features = [
    {
        Icon: FileTextIcon,
        name: 'localhost >_ to https://',
        description: 'Take your projects from localhost to the permaweb in seconds.',
        href: '/docs',
        cta: 'Learn more',
        background: <AnimatedBeamMultipleInputDemo />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        Icon: GitHubLogoIcon,
        name: '>_Git-connected Deploys',
        description: 'Deploy from Git or your CLI with ease.',
        href: '/docs',
        cta: 'Learn more',
        background: <OrbitingCirclesDemo />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        Icon: GlobeIcon,
        name: 'CI/CD for the permaweb',
        description: 'foget about the hassle of CI/CD, we got you covered.',
        href: '/docs',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
]

export async function BentoGrids() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <button
                       className="w-[180px] h-12 bg-[#265031] text-aovest-primary rounded-[100px]"
                       disabled
                    >
                        Features
                    </button>
                    <h1 className="text-white text-5xl font-bold tracking-wide mt-5">
                        Deploy Seamlessly and Quick
                    </h1>
                    <p className="text-gray-400 text-xl font-normal text-center">
                    Deploy your projects to the permaweb with a single click, scale infinitely
                    </p>
                </div>
                <BentoGrid className="relative mx-auto mt-6 max-w-5xl px-6 py-14 text-center md:px-8 lg:grid-rows-3">
                    {features.map(feature => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </>
    )
}
