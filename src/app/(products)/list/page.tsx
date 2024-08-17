import { Button } from '@/components/ui/button';
import Link from 'next/link';
import StepList from './(stepList)/StepList';

export default function ListPage() {
    return (
        <section>
            <h1 className='text-lg font-medium py-7 px-1'>
                우리아이를 위해 준비했어요
            </h1>
            <StepList />
            <Link href={'/order/1'}>
                <Button
                    type='button'
                    className='font-notoSansKr my-[60px] box-border bottom-0'
                    variant={'default'}>
                    구독하러가기
                </Button>
            </Link>
        </section>
    );
}
