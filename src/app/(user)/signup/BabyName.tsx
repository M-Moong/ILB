'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';

export default function BabyName() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <h1 className='text-lg text-center font-medium mb-40'>
                아이의 닉네임을 입력해주세요
            </h1>
            <Label htmlFor='babyName' className='text-base text-txt-foreground'>
                아이 닉네임
            </Label>
            <Input
                className='border-0 border-b-[1px] rounded-none p-[5px] text-xl border-txt-foreground mr-28 mt-6 mb-60'
                type='text'
                placeholder='닉네임을 입력해주세요'
                {...register('babyName', { required: true })}
            />
            {errors.name && (
                <p className='text-red-500'>
                    {errors.name.message?.toString()}
                </p>
            )}
        </>
    );
}
