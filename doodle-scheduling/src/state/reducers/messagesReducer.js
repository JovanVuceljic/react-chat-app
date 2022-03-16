const initState =
	[
		{
			"_id": "60cf5a2cb13b0d001ac55184",
			"message": "Firs message from Predrag Tesovic! ;)",
			"author": "Pedja",
			"timestamp": 1624201772442,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60cf5a4ab13b0d001ac55185",
			"message": "Oh my God... not &quot;Firs&quot;, it should be &quot;First&quot;",
			"author": "Pedja",
			"timestamp": 1624201802299,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60cf5a58b13b0d001ac55186",
			"message": "Frank is here too",
			"author": "Frank",
			"timestamp": 1624201816361,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60cfb099b13b0d001ac551a6",
			"message": "One more with special # character&#x27;s dollar: $, percent: %",
			"author": "Pedja",
			"timestamp": 1624223897210,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60ec46443adb62001af39741",
			"message": "test",
			"author": "Doodle",
			"timestamp": 1626097220269,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60ec4b5e3adb62001af39742",
			"message": "test 1",
			"author": "Doodle",
			"timestamp": 1626098526280,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60ec4b5f3adb62001af39743",
			"message": "test 1",
			"author": "Doodle",
			"timestamp": 1626098527590,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60ec4b6b3adb62001af39744",
			"message": "test 2",
			"author": "Doodle",
			"timestamp": 1626098539017,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "60ec4ba93adb62001af39745",
			"message": "test 3",
			"author": "Doodle",
			"timestamp": 1626098601983,
			"token": "NqebNLtXsswN"
		},
		{
			"_id": "61b6419a48c220001b5f6c8c",
			"message": "Slobodan&#x27;s first test",
			"author": "Slobodan",
			"timestamp": 1639334298794,
			"token": "NqebNLtXsswN"
		}
	];


const reducer = (state = initState, action) => {

	switch (action.type) {
		case "SEND_MESSAGE":
			return [...state, action.payload];
		default:
			return state;
	}
}

export default reducer