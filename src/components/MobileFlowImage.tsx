'use client';

import Image from 'next/image';
import useFlowAnimation from '@/hooks/useFlowAnimation';

export default function MobileFlowImage() {
    const { animationRef, isInView } = useFlowAnimation();

    return (
        <div
            ref={animationRef}
            className='relative mx-auto w-[206px] h-[380px] rounded-[47px] overflow-hidden'>
            <Image
                className={`mx-auto mt-[42px] ${isInView ? 'mobile_flow' : ''}`}
                src='/list_page.webp'
                width={170}
                height={1217}
                alt='list page image'
            />
            <Image
                className='absolute -top-[10px] left-0'
                src='/mobile.png'
                fill
                style={{ objectFit: 'contain' }}
                alt='moble image'
            />
        </div>
    );
}
