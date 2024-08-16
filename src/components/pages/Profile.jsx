import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="card bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" defaultValue="emilys" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" defaultValue="emily.johnson@x.dummyjson.com" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input type="text" defaultValue="Emily" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input type="text" defaultValue="Johnson" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Maiden Name</span>
            </label>
            <input type="text" defaultValue="Smith" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input type="number" defaultValue="28" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <input type="text" defaultValue="female" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input type="text" defaultValue="+81 965-431-3024" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Birth Date</span>
            </label>
            <input type="date" defaultValue="1996-05-30" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <input type="text" defaultValue="O-" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Height</span>
            </label>
            <input type="text" defaultValue="193.24 cm" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <input type="text" defaultValue="63.16 kg" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Eye Color</span>
            </label>
            <input type="text" defaultValue="Green" className="input input-bordered w-full"  />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Hair Color</span>
            </label>
            <input type="text" defaultValue="Brown" className="input input-bordered w-full"  />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">
              <span className="label-text">Hair Type</span>
            </label>
            <input type="text" defaultValue="Curly" className="input input-bordered w-full"  />
          </div>
        </div>

        {/* Address Section */}
        <div className="card bg-base-200 shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input type="text" defaultValue="626 Main Street" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input type="text" defaultValue="Phoenix" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <input type="text" defaultValue="Mississippi" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">State Code</span>
              </label>
              <input type="text" defaultValue="MS" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Postal Code</span>
              </label>
              <input type="text" defaultValue="29112" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input type="text" defaultValue="United States" className="input input-bordered w-full"  />
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="card bg-base-200 shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Department</span>
              </label>
              <input type="text" defaultValue="Engineering" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input type="text" defaultValue="Dooley, Kozey and Cronin" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" defaultValue="Sales Manager" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Company Address</span>
              </label>
              <input type="text" defaultValue="263 Tenth Street" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Company City</span>
              </label>
              <input type="text" defaultValue="San Francisco" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Company State</span>
              </label>
              <input type="text" defaultValue="Wisconsin" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Company State Code</span>
              </label>
              <input type="text" defaultValue="WI" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Company Postal Code</span>
              </label>
              <input type="text" defaultValue="37657" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Company Country</span>
              </label>
              <input type="text" defaultValue="United States" className="input input-bordered w-full"  />
            </div>
          </div>
        </div>

        {/* Bank Section */}
        <div className="card bg-base-200 shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Bank</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Card Expiry</span>
              </label>
              <input type="text" defaultValue="03/26" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Card Number</span>
              </label>
              <input type="text" defaultValue="9289 7606 5548 1815" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Card Type</span>
              </label>
              <input type="text" defaultValue="Elo" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Currency</span>
              </label>
              <input type="text" defaultValue="CNY" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">IBAN</span>
              </label>
              <input type="text" defaultValue="YPUXISOBI7TTHPK2BR3HAIXL" className="input input-bordered w-full"  />
            </div>
          </div>
        </div>

        {/* Other Details Section */}
        <div className="card bg-base-200 shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Other Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">IP Address</span>
              </label>
              <input type="text" defaultValue="42.48.100.32" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">MAC Address</span>
              </label>
              <input type="text" defaultValue="47:fa:41:18:ec:eb" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">University</span>
              </label>
              <input type="text" defaultValue="University of Wisconsin--Madison" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <input type="text" defaultValue="admin" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">SSN</span>
              </label>
              <input type="text" defaultValue="900-590-289" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Crypto Coin</span>
              </label>
              <input type="text" defaultValue="Bitcoin" className="input input-bordered w-full"  />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Crypto Wallet</span>
              </label>
              <input type="text" defaultValue="0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a" className="input input-bordered w-full"  />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Crypto Network</span>
              </label>
              <input type="text" defaultValue="Ethereum (ERC20)" className="input input-bordered w-full"  />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
