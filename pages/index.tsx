import { data } from "@/const/jobs";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(data.job_listings[0]);

  return (
    <div className={`px-4 font-sans max-w-[1140px] mx-auto`}>
      <div className="flex py-5 px-1 justify-between items-center">
        <h2 className="text-lg font-bold">{data.total_listings_count} jobs</h2>
      </div>
      <div className="w-full flex items-start">
        <div className="w-full flex-shrink-0 pt-1 lg:w-[427px] pb-5">
          {data.job_listings.map((job) => {
            return (
              <div
                className="p-1"
                key={job.id + job.title}
                onClick={() => setSelected(job)}
              >
                <div
                  className={`relative cursor-pointer transition-all duration-200 ease rounded-lg text-sm pb-10 bg-white shadow-inner job-listing-card ${
                    job.id === selected.id
                      ? "outline-3 outline-[#1FC76A] outline"
                      : null
                  }`}
                >
                  <div className="p-5 flex flex-col job-listing-top-information">
                    <div className="flex items-start justify-start">
                      <div className="mr-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={job.company.avatar}
                          alt={job.company.companyname}
                          className="rounded w-[45px] h-[45px] max-w-none"
                        />
                      </div>
                      <div className="order-3 ml-auto pl-2">
                        <div className="w-max font-semibold text-[#1fc76a] py-1 px-2 rounded-md bg-[#DDF7E9]">
                          {job.position}
                        </div>
                      </div>
                      <div>
                        <p className="whitespace-pre-wrap mb-1">
                          <span>{job.company.companyname}</span>
                          {job.company.rating > 0 ? (
                            <>
                              &nbsp;&nbsp;
                              <span>{job.company.rating} ★</span>
                            </>
                          ) : null}
                        </p>
                        <h2 className="font-bold text-base line-clamp-2 text-ellipsis">
                          {job.title}
                        </h2>
                      </div>
                    </div>
                    <div className="pl-[55px]">
                      <div className="text-[#838383] mb-1 whitespace-pre-wrap">
                        <span className="text-[#1FC76A] font-bold">
                          {job.time_ago} ago
                        </span>
                        &nbsp; &nbsp;
                        <div className="inline-block">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="map-marker-alt"
                            className="h-[1em] inline-block "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                            ></path>
                          </svg>
                          &nbsp;
                          {job.country}
                        </div>
                      </div>
                      {job.salary_min ? (
                        <div className="font-semibold whitespace-pre-wrap m-1">
                          {job.formatted_salary_min} -{" "}
                          {job.formatted_salary_max} / mth &nbsp;
                          {job.is_salary_estimated ? (
                            <span className="py-1 px-2 rounded bg-[#F1F1F1]">
                              EST
                            </span>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="px-5 w-full overflow-hidden text-ellipsis  whitespace-nowrap absolute after:align-middle">
                    {job.tech_stacks.map((tech, index) => {
                      return (
                        <>
                          <span
                            key={tech + index.toString()}
                            className="text-[#838383] inline-block py-1 px-2 overflow-hidden max-w-[90%] font-bold rounded text-ellipsis bg-[#F1F1F1]"
                          >
                            {tech.name}
                          </span>
                          &nbsp;
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block sticky top-[106px]">
          <div className="scrollable">
            <div className="bg-white">{selected.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
