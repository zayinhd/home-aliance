import React from 'react'

const jobs = [
    {
        // img: "",
        id: 1,
        title: "Plumber",
        date: "19th January, 2025",
        rating: 4.5,
    },
    {
        // img: "",
        id: 2,
        title: "Carpenter",
        date: "19th January, 2025",
        rating: 4.5,
    },
    {
        // img: "",
        id: 3,
        title: "Electrician",
        date: "19th January, 2025",
        rating: 4.5,
    },
]

const Job = () => {

    return (
        <>
            {

                jobs.map((job) => (
                    <div key={ job.id }>
                        <h2>{ job.title }</h2>
                        <p>{ job.date }</p>
                        <h3>Rating: { job.rating }</h3>
                    </div>
                ))
            }</>

    )
}

export default Job