import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
const navigate = useNavigate();
return (
    <div className="userCard">
        <img src={user.image} alt={user.id} />
        <h1>
            {user.firstName} {user.lastName}
        </h1>
        <button onClick={() => navigate(`/detailuser/${user.id}`)}>
                Details User
        </button>
        <button onClick={() => navigate(`/listuser/${user.id}`)} >Panier</button>
    </div>
);
};

export default User;