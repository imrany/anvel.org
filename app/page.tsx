import Image from "next/image"
import { FiDownloadCloud } from "react-icons/fi";
export default function Page() {
  return (
      <main className="flex mt-[50px] px-[120px] flex-col">
        <div className="flex items-center h-[65vh] justify-between">
            <div className="flex flex-col gap-4 w-[400px]">
                <p className="text-5xl font-semibold mb-3">Share files with easy</p>
                <p>Anvel is an open-source, cross-platform program that lets people share files and folders on their network.</p>
                <p>Users would be send files directly from their computer to another computer on the same network.</p>
                <a href="https://github.com/imrany/anvel/releases/download/v0.2.6/Anvel_0.2.6_x64_en-US.msi" download className="flex items-center justify-center h-[40px] rounded-md text-[12px] mt-6 border-none bg-[#e0ff72]">Download Anvel (LTS) <FiDownloadCloud  className="ml-2"/></a>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[13px]">Downloads Anvel <strong>v0.2.6</strong> with long term support.</p>
                    <p className="text-[13px]">You can also install old anvel versions, <a href="https://" target="_blank" rel="noreferrer noopener" className="text-blue-500 active:underline">here</a>.</p>
                </div>
            </div>
            <Image 
                src="/assets/anvel_2.png" 
                className="flex flex-col gap-4 object-fit"
                alt="Anvel's image"
                width={600}
                height={600}
                priority
            />
        </div>
    </main>
  );
}
