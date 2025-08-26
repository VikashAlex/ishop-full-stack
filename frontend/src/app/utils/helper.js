import axios from "axios";

export function helper(str) {
  return str
    .toLowerCase()                      // lowercase me convert
    .replace(/[^a-z0-9\s-]/g, "")       // sirf a-z, 0-9, space, - rakho
    .trim()                             // extra space trim
    .replace(/\s+/g, "-")               // space ko "-"
    .replace(/-+/g, "-");               // multiple "-" ko single "-"
}

const Axiosinstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export {Axiosinstance}