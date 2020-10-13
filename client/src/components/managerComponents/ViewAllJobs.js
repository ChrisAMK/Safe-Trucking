import React, { useEffect, useState } from "react";
import JobComponent from "./JobComponent";
import API from "../../utils/API";

function ViewAllJobs(props) {

    const [ jobList, setJobList ] = useState([]);

    const getAllJobList = async () => {
        const response = await API.viewAllJobs();
        const jobs = response.data;
        setJobList(jobs)
    }

    const getCompletedJobList = async () => {
        const response = await API.viewCompletedJobs();
        const jobs = response.data;
        setJobList(jobs)
    }

    const getActiveJobList = async () => {
        const response = await API.viewActiveJobs();
        const jobs = response.data;
        setJobList(jobs)
    }

    const getScheduledJobList = async () => {
        const response = await API.viewScheduledJobs();
        const jobs = response.data;
        setJobList(jobs)
    }


    useEffect(() => {
        const getJobList = async () => {
            const response = await API.viewAllJobs()
            console.log("HOOK", response)
            const jobs = response.data;
            setJobList(jobs);
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
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            <div className="row heading">
                <div className="col-12"> 
                    <h1>View All Jobs</h1>
                    <div className="jobBtnBar">
                        <button className="backBtn jobBtn" onClick={() => getAllJobList()}>All Jobs</button>
                        <button className="backBtn jobBtn" onClick={() => getCompletedJobList()}>Completed Jobs</button>
                        <button className="backBtn jobBtn" onClick={() => getActiveJobList()}>Active Jobs</button>
                        <button className="backBtn jobBtn" onClick={() => getScheduledJobList()}>Scheduled Jobs</button>
                    </div>
                </div>
            </div>

            <div>
                {jobList.map((job, key) => (
                    generateJobList(job, key)
                ))}
            </div>
        </React.Fragment>
        
    )
}

export default ViewAllJobs