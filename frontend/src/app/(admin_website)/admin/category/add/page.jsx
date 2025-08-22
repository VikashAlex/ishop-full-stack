"use client";
import { helper } from "@/app/utils/helper";
import axios from "axios";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';


function page() {
  const router = useRouter();
  const nameRfe = useRef(null);
  const slugRfe = useRef(null);
  const statusRfe = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    const name = nameRfe.current.value;
    const slug = slugRfe.current.value;
    const status = statusRfe.current.checked;
    const data = {name,slug,status};
    axios.post("http://localhost:8000/category/create", data).then((res) => {
        if (res.status==201) {
             toast.success(res.data.msg)
            setTimeout(() => {
                router.push('/admin/category');
            }, 5000);
        }
      }).catch((err) => {
        if(err.response.status==301){
            toast.warning(err.response.data.msg)
        }
        else{
            toast.warning(err.response.data.msg)
        }
      });
  };
  const createSlug = () => {
    const slug = helper(nameRfe.current.value);
    slugRfe.current.value = slug;
  };

  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-gray-100 to-gray-200 p-6 w-full">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <PlusCircle className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Add New Category</h1>
        </div>

        <form className="space-y-5" onSubmit={formHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category Name
            </label>
            <input
              type="text"
              required
              ref={nameRfe}
              onChange={createSlug}
              placeholder="Enter category name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Slug
            </label>
            <input
              type="text"
              ref={slugRfe}
              required
              placeholder="auto-generated or enter manually"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-600">
              Active Status
            </label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              ref={statusRfe}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Link href="/admin/category">
              <button
                type="button"
                className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default page;
