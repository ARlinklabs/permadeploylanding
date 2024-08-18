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

const features = [
    {
        Icon: FileTextIcon,
        name: 'localhost >_ to https://',
        description: 'Take your localhost to the web in seconds.',
        href: '/docs',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        Icon: GitHubLogoIcon,
        name: '>_Git-connected Deploys',
        description: 'Deploy from Git or your CLI with ease.',
        href: '/docs',
        cta: 'Learn more',
        background: <img src='/github.png' className="absolute flex justify-center opacity-" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        Icon: GlobeIcon,
        name: 'Deploy your app in seconds',
        description: 'Now deploying to arweave in few clicks.',
        href: '/docs',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    }
]

export async function BentoGrids() {
    return (
        <div className='flex flex-col justify-center'>
            <div className="inline-flex text-xl justify-center font-normal">
             
            </div>
            <BentoGrid className="relative mx-auto mt-6 max-w-5xl px-6 py-14 text-center md:px-8 lg:grid-rows-3">
                {features.map(feature => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </div>
    )
}
