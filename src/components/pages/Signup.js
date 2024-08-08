import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="card max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        <form>
          {/* Username Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter your username" className="input input-bordered w-full" />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full" />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm your password" className="input input-bordered w-full" />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" className="checkbox checkbox-primary mr-2" />
            <label htmlFor="terms" className="label cursor-pointer">
              <span className="label-text">I agree to the terms and conditions</span>
            </label>
          </div>

          {/* Signup Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </div>
        </form>

        {/* Social Login Options */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Or sign up with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="btn btn-outline btn-primary">Google</button>
            <button className="btn btn-outline btn-blue-500">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
