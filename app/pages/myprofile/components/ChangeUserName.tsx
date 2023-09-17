'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ChangeUserNameProps {
    user: any;
}

const ChangeUserName: React.FC<ChangeUserNameProps> = ({
    user
}) => {
    const router = useRouter();
    const [edit, setEdit] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: user?.name,
            phone: user?.phone
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        axios.post('/api/settings', data)
        .then(() => {
            router.refresh();
        })
        .catch(() => toast.error('Number Should be of 10 Digits!'))
        .finally(() => setEdit(false));    }

    return ( 
        <div className="mt-[20px]">
            {
                edit ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                                <label htmlFor="number">Number</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                    {...register("phone", { required: true })}
                                />
                            </div>
                        </div>
                        <div className="flex gap-[20px] mb-[20px] justify-center">
                            <button className="bg-blue-500 text-white p-2 rounded-lg mt-5">Save</button>
                            <button className="bg-blue-500 text-white p-2 rounded-lg mt-5" onClick={() => setEdit(false)}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => setEdit(true)}>Edit</button>
                )
            }
        </div>
     );
}
 
export default ChangeUserName;