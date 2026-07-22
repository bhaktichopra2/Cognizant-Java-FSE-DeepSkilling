import office from "./office.jpg";

function App() {

    const heading = "Office Space Rental App";

    const officeObj = {
        Name: "DBS",
        Rent: 55000,
        Address: "Chennai"
    };

    const officeList = [
        {
            Name: "DBS",
            Rent: 55000,
            Address: "Chennai"
        },
        {
            Name: "Regus",
            Rent: 75000,
            Address: "Bangalore"
        },
        {
            Name: "WeWork",
            Rent: 85000,
            Address: "Hyderabad"
        },
        {
            Name: "SmartWorks",
            Rent: 45000,
            Address: "Pune"
        }
    ];

    return (

        <div style={{ padding: "20px" }}>

            <h1>{heading}</h1>

            <img
                src={office}
                alt="Office Space"
                width="500"
                height="300"
            />

            <h2>Featured Office</h2>

            <p>
                <strong>Name:</strong> {officeObj.Name}
            </p>

            <p
                style={{
                    color:
                        officeObj.Rent < 60000
                            ? "red"
                            : "green"
                }}
            >
                <strong>Rent:</strong> ₹{officeObj.Rent}
            </p>

            <p>
                <strong>Address:</strong> {officeObj.Address}
            </p>

            <hr />

            <h2>Available Office Spaces</h2>

            {
                officeList.map((office, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                            width: "350px"
                        }}
                    >

                        <h3>{office.Name}</h3>

                        <p
                            style={{
                                color:
                                    office.Rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            Rent : ₹{office.Rent}
                        </p>

                        <p>
                            Address : {office.Address}
                        </p>

                    </div>

                ))
            }

        </div>

    );
}

export default App;