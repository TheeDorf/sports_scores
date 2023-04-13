import React, { useState, useEffect } from 'react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '120dbbf960msh3b1dc96d2563f33p17472djsnc2a87881d164',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

function SportsScores() {
	const apiUrl = "https://sportscore1.p.rapidapi.com/sports/1/teams?page=1"

	const [teams, setTeams] = useState([]);

	useEffect(() => {
		fetch(apiUrl, options)
			.then(response => response.json())
			.then(data => {
				const sortedTeams = data.sort((a, b) => a.sport.localeCompare(b.sport));
				setTeams(sortedTeams);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<div>
			<h1>Sports Scores</h1>
			<table>
				<thead>
					<tr>
						<th>Sport</th>
						<th>Team</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{teams.map(team => (
						<tr key={team.id}>
							<td>{team.sport}</td>
							<td>{team.name}</td>
							<td>{team.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default SportsScores;
