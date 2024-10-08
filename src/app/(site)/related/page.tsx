'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { PiLinkSimpleBold } from 'react-icons/pi';

export default function Related() {
    return (
        <section>
            <h1 className='mx-auto text-2xl text-center mt-[20%] mb-[15%]'>
                함께 보면 좋은 사이트
            </h1>
            <AnimatePresence>
                <motion.div>
                    <ul className='flex flex-col gap-12 mb-[60px]'>
                        <li>
                            <Link
                                className='text-lg font-medium'
                                href={'https://www.childcare.go.kr/?menuno=279'}
                                target='_blank'>
                                <PiLinkSimpleBold className='inline-block align-middle mr-2 text-lg text-[#65C09B]' />
                                아이사랑
                                <p className='pt-1 pl-6 text-sm font-light'>
                                    임신부터 육아까지 종합 정보와 서비스를
                                    제공해요
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-lg font-medium'
                                href={
                                    'https://www.bokjiro.go.kr/ssis-tbu/index.do'
                                }
                                target='_blank'>
                                <PiLinkSimpleBold className='inline-block align-middle mr-2 text-lg text-[#FF999E]' />
                                복지로
                                <p className='pt-1 pl-6 text-sm font-light'>
                                    다양한 복지 제도를 조회하고 신청할 수 있어요
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-lg font-medium'
                                href={'https://central.childcare.go.kr/'}
                                target='_blank'>
                                <PiLinkSimpleBold className='inline-block align-middle mr-2 text-lg text-[#65C09B]' />
                                중앙육아종합지원센터
                                <p className='pt-1 pl-6 text-sm font-light'>
                                    육아에 필요한 종합적인 지원을 제공해요
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-lg font-medium'
                                href={'http://www.shjw.or.kr/'}
                                target='_blank'>
                                <PiLinkSimpleBold className='inline-block align-middle mr-2 text-lg text-[#FF999E]' />
                                한국산후조리원협회
                                <p className='pt-1 pl-6 text-sm font-light'>
                                    산후조리원 정보를 확인할 수 있어요
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-lg font-medium'
                                href={'https://nip.kdca.go.kr/'}
                                target='_blank'>
                                <PiLinkSimpleBold className='inline-block align-middle mr-2 text-lg text-[#65C09B]' />
                                예방접종도우미
                                <p className='pt-1 pl-6 text-sm font-light'>
                                    아이에게 필요한 예방접종 정보를 확인할 수
                                    있어요
                                </p>
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
