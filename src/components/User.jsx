import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userFetchMiddleWare } from "../reducers/userFetchMiddleware";
import store from "../store";

function User(props) {
    let { users } = props;
    useEffect(() => {
        props.fetchUser();
        console.log("will make async request");
    }, []);

    return (
        <div>
            Users
            <h2>User List</h2>
            {users.map((user) => {
                return (
                    <li style={{ listStyle: "none" }} key={user.id}>
                        {user.name}
                    </li>
                );
            })}
        </div>
    );
}

function mapStateToProps(store) {
    return store.users;
}

function mapDispatchtoProps(dispatch) {
    return {
        fetchUser: () => {
            return dispatch(userFetchMiddleWare);
        },
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(User);
