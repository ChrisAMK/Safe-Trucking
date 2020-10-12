import React, { useEffect, useState } from "react";
import JobComponent from "./JobComponent";
import API from "../../utils/API";

function ViewAllJobs(props) {

    const [ jobList, setJobList ] = useState([]);

    useEffect(() => {
        const getJobList = async () => {
            const response = await API.viewAllJobs()
            const jobs = response.data;
            setJobList(jobs);
            console.log(jobs)
            return jobs
        }
        getJobList();
    }, [])

    const generateJobList = (job, key) => {
        return (
            <JobComponent
                
                address={job.address}
                backupContactName={job.backupContactName}
                backupContactNumber={job.backupContactNumber}
                client={job.client}
                contactName={job.contactName}
                contactNumber={job.contactNumber}
                deliveryDate={job.deliveryDate}
                details={job.details}
                worker={job.worker}
                key={key}
            />
        )
    }

    return(

        <React.Fragment>
            <h1>View All Jobs</h1>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            
            <div>
                {jobList.map((job, key) => (
                    generateJobList(job, key)
                ))}
            </div>
        </React.Fragment>
        
    )
}

export default ViewAllJobs