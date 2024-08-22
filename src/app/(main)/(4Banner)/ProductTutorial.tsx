import Link from 'next/link';
import { Button } from '../../../components/ui/button';

export default function ProductTutorial() {
    return (
        <article className='py-[62px] flex flex-col px-5 items-center gap-[60px]'>
            <h2 className='self-start text-2xl'>
                <span className='text-3xl font-bold'>우리 아이 맞춤</span>
                <br />
                구독 서비스 시작하기
            </h2>
            <div className='relative self-start flex flex-col gap-[61px]'>
                <div className='z-[-1] absolute top-5 left-3.5 h-[230px] w-[1px] border-l-2 border-dashed	 border-[#7DC8AA]'></div>
                <div className='flex gap-2.5 items-center'>
                    <div className='w-[30px] h-[30px] rounded-full bg-[#7DC8AA] flex justify-center items-center text-white text-sm'>
                        1
                    </div>
                    <div>
                        <p className='text-lg font-medium'>아이 정보 입력</p>
                        <p className='text-sm'>
                            소중한 우리 아이의 이야기를 들려주세요
                        </p>
                    </div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    <div className='w-[30px] h-[30px] rounded-full bg-[#7DC8AA] flex justify-center items-center text-white text-sm'>
                        2
                    </div>
                    <div>
                        <p className='text-lg font-medium'>
                            구독 서비스 제품 확인
                        </p>
                        <p className='text-sm'>
                            성장 단계에 맞는 특별한 아이템을 준비했어요
                        </p>
                    </div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    <div className='w-[30px] h-[30px] rounded-full bg-[#7DC8AA] flex justify-center items-center text-white text-sm'>
                        3
                    </div>
                    <div>
                        <p className='text-lg font-medium'>매달 정기 배송</p>
                        <p className='text-sm'>
                            우리 아이의 행복한 성장을 함께 응원해요
                        </p>
                    </div>
                </div>
            </div>
            <Link href={'/order'} className='w-full text-center'>
                <Button
                    variant={'default'}
                    size={'lg'}
                    radius={'lg'}
                    fontSize={'lg'}>
                    구독하러가기
                </Button>
            </Link>
        </article>
    );
}
