import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
	const [user, setUser] = useState([])

	const fetchData = () => {
		fetch("https://randomuser.me/api/?results=50", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => setUser(res.results))
			.catch((err) => console.log(err));
	};

user.map((ele)=>{
  // console.log(ele)
  fetch('http://localhost:8080/users/create', {
            method: 'POST',
            headers: {
             
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:ele.name.first,picture:ele.picture.medium})
          })
})
	
const del = () => {
  fetch("http://localhost:8080/users/delete", {
      method: "DELETE",
    
  })
   
}
	return (
		<div>
			<button onClick={fetchData}>Fetch Users</button>
			<button onClick={del}>Delete Users</button>
			<button >
				<Link to="/userdetail">User Details</Link>
			</button>
		</div>
	);
};

export default HomePage;
