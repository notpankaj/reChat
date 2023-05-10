import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api_userProfile } from "../../api/user";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const userId = useParams()?.id;
  if (!userId) return <h1>no user id</h1>;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const res = await api_userProfile(userId);
        console.log(res);
        setUser(res.data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const handleMessageClick = () => {
    navigate("/chat/" + userId);
  };

  return (
    <div>
      <h6>ProfilePage :{loading ? "Loading...." : user?.username}</h6>

      {user && (
        <Fragment>
          <button>follow</button>
          <button onClick={handleMessageClick}>message</button>
        </Fragment>
      )}
    </div>
  );
};

export default ProfilePage;
