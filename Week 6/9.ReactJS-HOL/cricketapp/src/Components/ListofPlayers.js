import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 82 },
        { name: "Gill", score: 67 },
        { name: "Pant", score: 74 },
        { name: "Rahul", score: 69 },
        { name: "Hardik", score: 88 },
        { name: "Jadeja", score: 72 },
        { name: "Ashwin", score: 65 },
        { name: "Bumrah", score: 80 },
        { name: "Shami", score: 58 },
        { name: "Siraj", score: 76 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        players.map((player, index) => (

                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

            <br />

            <h2>Players having score below 70</h2>

            <ul>

                {
                    lowScorers.map((player, index) => (

                        <li key={index}>
                            {player.name} - {player.score}
                        </li>

                    ))
                }

            </ul>

        </div>

    );
}

export default ListofPlayers;