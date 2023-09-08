import { JobListingCard } from "@/components/JobListingCard";
import { data } from "@/const/jobs";
import { useState } from "react";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(data.job_listings[0]);

  return (
    <div className={`px-4 font-sans max-w-[1140px] mx-auto`}>
      <div className="flex py-5 px-1 justify-between items-center">
        <h2 className="text-lg font-bold">{data.total_listings_count} jobs</h2>
      </div>
      <div className="w-full flex items-start">
        <div className="w-full flex-shrink-0 pt-1 lg:w-[427px] pb-5">
          {data.job_listings.map((job) => {
            return (
              <JobListingCard
                job={job}
                isSelected={selectedJob.id == job.id}
                key={job.id}
                onClick={() => setSelectedJob(job)}
              />
            );
          })}
        </div>
        <div className="hidden lg:block sticky top-[106px]">
          <div className="scrollable">
            <div className="bg-white">{selectedJob.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
