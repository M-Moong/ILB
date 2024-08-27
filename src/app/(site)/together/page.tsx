'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function Together() {
    return (
        <section>
            <h1 className='mx-auto text-2xl text-center mt-[20%] mb-[15%]'>
                함께 보면 좋은 사이트
            </h1>
            <AnimatePresence>
                <motion.div className='border border-primary rounded-xl px-3 py-3 mx-4'>
                    <h2 className='text-xl mt-2 mx-2 shadow-md'>정부 사이트</h2>
                    <ol className='px-6 py-4 flex flex-col gap-3'>
                        <li>
                            <Link href={'https://www.mohw.go.kr/'}>
                                보건 복지부
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'https://www.mohw.go.kr/kids/index.jsp'}>
                                어린이 보건복지부
                            </Link>
                        </li>
                    </ol>
                    <h2 className='text-xl mt-2 mx-2 shadow-md'>
                        출산 관련 사이트
                    </h2>
                    <ol className='px-8 py-4 flex flex-col gap-3'>
                        <li>
                            <Link
                                href={'https://www.childcare.go.kr/?menuno=279'}
                                target='_blank'>
                                아이사랑
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://seoul-agi.seoul.go.kr/index'}>
                                서울시 임신,출산 정보센터
                            </Link>
                        </li>
                    </ol>
                    <hr />
                    <h2 className='text-xl mt-2 mx-2 shadow-md'>산후조리원</h2>
                    <ol className='px-8 py-4 flex flex-col gap-3'>
                        <li>
                            <Link
                                href={'https://sanhujori.kohi.or.kr/index.do'}>
                                인구보건복지협회
                            </Link>
                        </li>
                        <li>
                            <Link href={'http://www.shjw.or.kr/'}>
                                한국산후조리원협회
                            </Link>
                        </li>
                    </ol>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
