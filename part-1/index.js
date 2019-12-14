// List of agents
const agents = [
	{
		agent: "007",
		country: "Brazil",
		address: "Avenida Vieira Souto 168 Ipanema, Rio de Janeiro",
		date: "Dec 17, 1995, 9:45:17 PM",
	},
	{
		agent: "005",
		country: "Poland",
		address: "Rynek Glowny 12, Krakow",
		date: "Apr 5, 2011, 5:05:12 PM",
	},
	{
		agent: "007",
		country: "Morocco",
		address: "27 Derb Lferrane, Marrakech",
		date: "Jan 1, 2001, 12:00:00 AM",
	},
	{
		agent: "005",
		country: "Brazil",
		address: "Rua Roberto Simonsen 122, Sao Paulo",
		date: "May 5, 1986, 8:40:23 AM",
	},
	{
		agent: "011",
		country: "Poland",
		address: "swietego Tomasza 35, Krakow",
		date: "Sep 7, 1997, 7:12:53 PM",
	},
	{
		agent: "003",
		country: "Morocco",
		address: "Rue Al-Aidi Ali Al-Maaroufi, Casablanca",
		date: "Aug 29, 2012, 10:17:05 AM",
	},
	{
		agent: "008",
		country: "Brazil",
		address: "Rua tamoana 418, tefe",
		date: "Nov 10, 2005, 1:25:13 PM",
	},
	{
		agent: "013",
		country: "Poland",
		address: "Zlota 9, Lublin",
		date: "Oct 17, 2002, 10:52:19 AM",
	},
	{
		agent: "002",
		country: "Morocco",
		address: "Riad Sultan 19, Tangier",
		date: "Jan 1, 2017, 5:00:00 PM",
	},
	{
		agent: "009",
		country: "Morocco",
		address: "atlas marina beach, agadir",
		date: "Dec 1, 2016, 9:21:21 PM",
	},
];

// Gets a list of isolated agents
const getIsolatedAgents = agents => {
	// Creates a map: agent->mission_count
	const missionsCountsMap = agents.reduce((obj, agent) => {
		obj[agent.agent] = obj[agent.agent] ? obj[agent.agent] + 1 : 1;
		return obj;
	}, {});

	// Checks in map and returns only agents with a single mission
	return Object.keys(missionsCountsMap).filter(key => {
		return missionsCountsMap[key] === 1;
	});

};

// Creates a map: country->number_of_isolated_agents
const getIsolatedAgentsByCountry = (allAgents, isolatedAgents) => {
	let obj = {};
	for (agent of allAgents) {
		// If current agent is an isolated agent
		if (isolatedAgents.includes(agent.agent)) {
			// Add +1 to count or set to 1
			obj[agent.country] = obj[agent.country] ? obj[agent.country] + 1 : 1;
		}
	}

	return obj;
};

// loops through object properties and returns the key of the max value
// E.g Morroco -> 3,
const getMaxValueKey = obj => {
	return Object.keys(obj).reduce((maxValueKey, currentValueKey) =>
		obj[maxValueKey] > obj[currentValueKey] ? maxValueKey : currentValueKey
	);
};

// Runs the logic in sequence
const run = agents => {
	const isolatedAgents = getIsolatedAgents(agents);
	const isolatedAgentsByCountry = getIsolatedAgentsByCountry(agents, isolatedAgents);
	const maxIsolatedAgentCountry = getMaxValueKey(isolatedAgentsByCountry);

	console.log(`${maxIsolatedAgentCountry}: ${isolatedAgentsByCountry[maxIsolatedAgentCountry]}`);
	return maxIsolatedAgentCountry;
}

run(agents);