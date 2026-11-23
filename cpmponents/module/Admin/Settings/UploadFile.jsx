'use client'

import { ClientError } from "@/utils/ClientrrorHandler";
import { getClientCookie } from "@/utils/CookieClient";
import { PlusIcon } from "@phosphor-icons/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";


export default function UploadFile() {

    const [file, setFile] = useState(null);


    const addHandler = async () => {
        const cookie = await getClientCookie();

        const formData = new FormData();

        if (file) {
            formData.append("form", file);
        }

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}settings/uploadfile`,
                formData, 
                {
                    headers: {
                        'Authorization': cookie
                    }
                }
            );

            toast.success("فایل با موفقیت آپلود شد!");
            setFile(null); 
        } catch (err) {
            ClientError(err); 
        }
    };

    return (
        <div className="w-full border border-neutral-400 border-dashed text-black p-4 rounded-lg flex flex-col">
            <label className="flex flex-col items-center justify-center text-neutral-400 flex-1 p-6" htmlFor="upload-file">
                <PlusIcon className=" text-4xl" />
                {file ? file.name : "افزودن فایل"}
            </label>

            <input
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]);
                    } else {
                        setFile(null); 
                    }
                }}
                type="file"
                className="hidden"
                name="upload-file"
                id="upload-file"
            />
            <button
                onClick={addHandler}
                disabled={!file}
                className="w-full disabled:opacity-50 bg-blue-600 text-white py-2 rounded-lg mt-4" // اضافه کردن mt-4 برای فاصله
            >
                {file ? "تایید آپلود" : "افزودن"}
            </button>
        </div>
    );
}
