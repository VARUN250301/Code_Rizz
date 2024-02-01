import React from 'react'
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import PdfFile from "./pdf_report_deloitte.pdf"
const HomeDashboard = () => {
  const openDashboard = () => {
    window.location.href='/index1.html';
  }
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={img1}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                CSR flow for Corporates
              </h2>
              <p class="leading-relaxed text-base">
                Onboard NGOS and track the progress of your CSR initiatives
                throughout the year
              </p>
              <button
                onClick={openDashboard}
                class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Explore Analytics
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={img2}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                KartavyaPath
              </h2>
              <p class="leading-relaxed text-base">
                Kartavya Path making CSR initiatives efficient
              </p>
              <a
                href="https://drive.google.com/file/d/11uFkD6SgR_OmVgy-7xeh3kMwgRdYzC9_/view?usp=sharing"
                target="_blank"
              >
                <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Generate Report
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeDashboard