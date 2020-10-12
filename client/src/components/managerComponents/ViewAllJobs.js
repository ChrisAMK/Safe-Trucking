import React, { useEffect, useState } from "react";
import JobComponent from "./JobComponent";
import API from "../../utils/API";

function ViewAllJobs(props) {

    const dummyJobList = [
        {
            address: "18 Ray Close",
            contact: "0475416442",
            worker: "Chris"
        },
        {
            address: "1 William Street",
            contact: "0475666222",
            worker: "John"
        },
        {
            address: "25 Next Street",
            contact: "0475222444",
            worker: "Joah"
        }
    ]

    const [ jobList, setJobList ] = useState({});

    let jobs = [];

    const getJobList = async () => {
        console.log("First Check")
        let response = await API.viewAllJobs()
        jobs = response.data;
        console.log(jobs)
        setJobList(jobs)
        console.log(jobList)
        return jobs
    }  

    // useEffect(() => {
    //     // For demonstration purposes, we mock an API call.
    //     API.getDeveloper.then((res) => {
    //       setDeveloperState(res);
    //       console.log("Developer State:");
    //       console.log(developerState);
    //     });
    //   }, []);
    

    useEffect(() => {
        API.viewAllJobs().then((res) => {
            setJobList(res.data[0]);
            console.log(res)
            console.log("Job list");
            console.log(jobList)

            // fetch("/api/user_data")
            // .then(res => res.json())
            // .then(res => setTestUser(res))
            // .then(console.log(testUser))
            // .catch(err => console.log(err))


        }, [jobList])

        // jobs = getJobList()
        // console.log(jobs)
        // fetch("/api/job")
        //     .then(res => res.json())
        //     .then(res => setJobList(res))
        //     .then(console.log(jobList))
        //     .catch(err => console.log(err))
// eslint-disable-next-line
    }, [])

    const generateJobList = (job, key) => {
        return (
            <JobComponent
                address={job.address}
                contact={job.contact}
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
                {jobs.map((job, key) => (
                    generateJobList(job, key)
                ))}
            </div>
        </React.Fragment>
        
    )
}

export default ViewAllJobs