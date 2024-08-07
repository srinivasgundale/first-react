import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShimmerCards from "../common/ShimmerCards";
const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setProfile(data);
        } else {
          console.error(data.message || "Failed to fetch profile");
        }
      } catch (error) {
        console.error("An error occurred while fetching the profile:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  if (!profile) {
    return <ShimmerCards />;
  }

  return (
    <div className="container">
      <h2>Profile</h2>
      <img
        src={profile.image}
        alt={`${profile.firstName} ${profile.lastName}`}
        className="mb-3 img-fluid rounded-circle"
      />
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>First Name:</strong> {profile.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {profile.lastName}
      </p>
      <p>
        <strong>Maiden Name:</strong> {profile.maidenName}
      </p>
      <p>
        <strong>Age:</strong> {profile.age}
      </p>
      <p>
        <strong>Gender:</strong> {profile.gender}
      </p>
      <p>
        <strong>Phone:</strong> {profile.phone}
      </p>
      <p>
        <strong>Birth Date:</strong> {profile.birthDate}
      </p>
      <p>
        <strong>Blood Group:</strong> {profile.bloodGroup}
      </p>
      <p>
        <strong>Height:</strong> {profile.height} cm
      </p>
      <p>
        <strong>Weight:</strong> {profile.weight} kg
      </p>
      <p>
        <strong>Eye Color:</strong> {profile.eyeColor}
      </p>
      <p>
        <strong>Hair Color:</strong> {profile.hair.color}
      </p>
      <p>
        <strong>Hair Type:</strong> {profile.hair.type}
      </p>
      <h3>Address</h3>
      <p>
        <strong>Address:</strong> {profile.address.address}
      </p>
      <p>
        <strong>City:</strong> {profile.address.city}
      </p>
      <p>
        <strong>State:</strong> {profile.address.state}
      </p>
      <p>
        <strong>State Code:</strong> {profile.address.stateCode}
      </p>
      <p>
        <strong>Postal Code:</strong> {profile.address.postalCode}
      </p>
      <p>
        <strong>Country:</strong> {profile.address.country}
      </p>
      <h3>Company</h3>
      <p>
        <strong>Department:</strong> {profile.company.department}
      </p>
      <p>
        <strong>Company Name:</strong> {profile.company.name}
      </p>
      <p>
        <strong>Title:</strong> {profile.company.title}
      </p>
      <p>
        <strong>Company Address:</strong> {profile.company.address.address}
      </p>
      <p>
        <strong>Company City:</strong> {profile.company.address.city}
      </p>
      <p>
        <strong>Company State:</strong> {profile.company.address.state}
      </p>
      <p>
        <strong>Company State Code:</strong> {profile.company.address.stateCode}
      </p>
      <p>
        <strong>Company Postal Code:</strong>{" "}
        {profile.company.address.postalCode}
      </p>
      <p>
        <strong>Company Country:</strong> {profile.company.address.country}
      </p>
      <h3>Bank</h3>
      <p>
        <strong>Card Expiry:</strong> {profile.bank.cardExpire}
      </p>
      <p>
        <strong>Card Number:</strong> {profile.bank.cardNumber}
      </p>
      <p>
        <strong>Card Type:</strong> {profile.bank.cardType}
      </p>
      <p>
        <strong>Currency:</strong> {profile.bank.currency}
      </p>
      <p>
        <strong>IBAN:</strong> {profile.bank.iban}
      </p>
      <h3>Other Details</h3>
      <p>
        <strong>IP Address:</strong> {profile.ip}
      </p>
      <p>
        <strong>MAC Address:</strong> {profile.macAddress}
      </p>
      <p>
        <strong>University:</strong> {profile.university}
      </p>
      <p>
        <strong>Role:</strong> {profile.role}
      </p>
      <p>
        <strong>SSN:</strong> {profile.ssn}
      </p>
      <p>
        <strong>Crypto Coin:</strong> {profile.crypto.coin}
      </p>
      <p>
        <strong>Crypto Wallet:</strong> {profile.crypto.wallet}
      </p>
      <p>
        <strong>Crypto Network:</strong> {profile.crypto.network}
      </p>
    </div>
  );
};

export default Profile;
