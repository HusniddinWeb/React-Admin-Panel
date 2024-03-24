export const userColumns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    {
        field:"user", headerName:"User", width: 230, renderCell: (params)=>{
            return(
                <div className="cellWidthImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        },
    },
    {
        field:"email",
        headerName:"Email",
        width: 230,
    },
    {
        field:"age",
        headerName:"Age",
        width: 100,
    },
    {
        field:"status",
        headerName:"Status",
        width: 160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]


export const userRows = [
    {
        id: 1,
        username: "Ali",
        img: "https://mighty.tools/mockmind-api/content/cartoon/9.jpg",
        status: "active",
        email: "ali12@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Umar",
        img: "https://mighty.tools/mockmind-api/content/cartoon/9.jpg",
        status: "passive",
        email: "umar54@gmail.com",
        age: 38,
    }, 
    {
        id: 3,
        username: "Hamza",
        img: "https://mighty.tools/mockmind-api/content/cartoon/9.jpg",
        status: "pending",
        email: "hamza9@gmail.com",
        age: 45,
    },
    {
        id: 4,
        username: "Rasul",
        img: "https://mighty.tools/mockmind-api/content/cartoon/9.jpg",
        status: "passive",
        email: "rasul1@gmail.com",
        age: 25,
    },
    {
        id: 5,
        username: "Sardor",
        img: "https://mighty.tools/mockmind-api/content/cartoon/9.jpg",
        status: "pending",
        email: "1sardor2@gmail.com",
        age: 26,
    },
    {
        id: 6,
        username: "Yusuf",
        img: "https://mighty.tools/mockmind-api/content/cartoon/9.jpg",
        status: "active",
        email: "yusuf23@gmail.com",
        age: 24,
    },
]